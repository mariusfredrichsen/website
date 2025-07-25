import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet';
import { useEffect, useRef, useState } from 'react';
import polyline from '@mapbox/polyline';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import stravaLogo from '../../assets/stravaLogo.svg';
import stravaData from '../../assets/stravaData.json';
import countryData from '../../assets/countryData.json'


type GeoJSONGeometry = {
    type: "Polygon" | "MultiPolygon";
    coordinates: number[][][] | number[][][][];
};

const mappedStravaData = stravaData.map((activity) => {
    return {
        "id": activity.id,
        "name": activity.name,
        "distance": activity.distance,
        "elevation": activity.total_elevation_gain,
        "elapsedTime": activity.elapsed_time,
        "movingTime": activity.moving_time,
        "encodedPolyline": activity.map.summary_polyline,
        "startLatLon": activity.start_latlng as [number, number],
        "endLatLon": activity.end_latlng as [number, number],
        "day": activity.start_date,
    }
})

function isPointInPolygon(
    point: [number, number],
    geometry: GeoJSONGeometry
): boolean {

    const [lat, lon] = point;
    const x = lon;
    const y = lat;

    if (geometry.type === "Polygon") {
        return polygonContains(geometry.coordinates as number[][][], x, y);
    }

    if (geometry.type === "MultiPolygon") {
        for (const polygon of geometry.coordinates as number[][][][]) {
            if (polygonContains(polygon, x, y)) {
                return true;
            }
        }
    }

    return false;
}

function polygonContains(rings: number[][][], x: number, y: number): boolean {
    let isInside = false;

    for (let i = 0; i < rings.length; i++) {
        const ring = rings[i];
        let j = ring.length - 1;
        let inside = false;

        for (let k = 0; k < ring.length; k++) {
            const xi = ring[k][0], yi = ring[k][1];
            const xj = ring[j][0], yj = ring[j][1];

            const intersect = ((yi > y) !== (yj > y)) &&
                (x < (xj - xi) * (y - yi) / ((yj - yi) + Number.EPSILON) + xi);

            if (intersect) inside = !inside;
            j = k;
        }

        if (i === 0) {
            isInside = inside;
        } else if (inside) {
            isInside = false;
        }
    }

    return isInside;
}

function FitBounds({ positions }: { positions: LatLngExpression[] }) {
    const map = useMap();

    useEffect(() => {
        if (positions.length === 0) return;

        const bounds = L.latLngBounds(positions);
        map.flyToBounds(bounds, {
            padding: [50, 50],
            duration: 1,
            easeLinearity: 0.25,
        });
    }, [map, positions]);

    return null; // no UI output
}

const countryActivities = new Map<string, typeof mappedStravaData>();

for (const activity of mappedStravaData) {
    for (const country of Object.values(countryData)) {
        if (isPointInPolygon(activity.startLatLon, country.geometry as GeoJSONGeometry)) {
            const arr = countryActivities.get(country.properties.name) ?? [];
            arr.push(activity);
            countryActivities.set(country.properties.name, arr);
            break;
        }
    }
}

function Run() {


    const [selectedCountry, setSelectedCountry] = useState(countryActivities.keys().next().value ?? "Norway") /* TODO find a solution for this */

    const selectCountry = (country: string) => {
        setSelectedCountry(country);
    }


    const scrollRef = useRef<HTMLDivElement>(null);
    const [showTopShadow, setShowTopShadow] = useState(false);
    const [showBottomShadow, setShowBottomShadow] = useState(false);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = el;
            setShowTopShadow(scrollTop > 0);
            setShowBottomShadow(scrollTop + clientHeight < scrollHeight - 1);
        };

        handleScroll(); // check on mount
        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-screen h-screen p-4 bg-gray-900 flex flex-col gap-8">
            <div className="flex h-full gap-8 flex-col md:flex-row">
                <div className="relative w-full self-stretch bg-gray-800 rounded flex flex-col flex-1/4 overflow-auto">
                    {showTopShadow && (
                        <div className="absolute top-0 left-0 right-0 h-6 pointer-events-none z-20 shadow-[inset_0_16px_16px_-8px_rgba(0,0,0,0.5)]" />
                    )}

                    {showBottomShadow && (
                        <div className="absolute bottom-0 left-0 right-0 h-6 pointer-events-none z-20 shadow-[inset_0_-16px_16px_-8px_rgba(0,0,0,0.5)]" />
                    )}

                    <div ref={scrollRef} className="overflow-auto flex flex-col h-full">
                        <div className="w-full p-8 border-b flex justify-center items-center bg-gray-800">
                            <div className="justify-start text-5xl font-normal"><strong>Countries</strong></div>
                        </div>

                        {Array.from(countryActivities.entries()).map(([country, activities]) => (
                            <div
                                key={country}
                                className={`w-full px-4 py-4 border-b flex flex-col gap-2 cursor-pointer ${selectedCountry === country ? "bg-gray-700" : ""
                                    }`}
                                onClick={() => selectCountry(country)}
                            >
                                <div className="justify-start text-xl md:text-2xl font-normal">
                                    <strong>{country}</strong>
                                </div>
                                <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden text-sm md:text-base">
                                    <p>{activities.reduce((sum, a) => sum + a.distance / 1000, 0).toFixed(1)}km</p>
                                    <p>{activities.reduce((sum, a) => sum + a.movingTime / 3600, 0).toFixed(1)}h</p>
                                    <p>{(() => {
                                        const days = new Set(activities.map((a) => a.day)).size;
                                        return `${days} ${days === 1 ? "day" : "days"}`;
                                    })()}</p>
                                    <p>{activities.length} {activities.length === 1 ? "run" : "runs"}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-full rounded flex-3/4">
                    <MapContainer className="w-full h-full rounded" zoom={13} center={[0, 0]}>
                        <TileLayer
                            url={`https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`}
                            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
                        />

                        {Array.from(countryActivities.values()).flatMap((countryActivity) =>
                            countryActivity.map((activity, idx) => {
                                const decodedPolyline = polyline.decode(activity.encodedPolyline) as LatLngExpression[];
                                return (
                                    <Polyline
                                        key={activity.id ?? idx}
                                        positions={decodedPolyline}
                                        pathOptions={{
                                            color: 'orange',
                                            opacity: 0.25,
                                        }}
                                    />
                                );
                            })
                        )}
                        <FitBounds
                            positions={ /* TODO update on reclick */
                                (countryActivities.get(selectedCountry) ?? [])
                                    .flatMap(activity => polyline.decode(activity.encodedPolyline) as LatLngExpression[])
                            }
                        />
                    </MapContainer>

                </div>
            </div >
            <div className="flex p-4 bg-gray-800 justify-between rounded">
                <a href="https://www.strava.com/athletes/74137055" target="_blank" rel="noopener noreferrer">
                    <img src={stravaLogo} alt="Strava Logo" />
                </a>
                <div className="flex items-center justify-start text-1xl font-normal"><strong>Updated 24.07.2025</strong></div>
            </div>
        </div >
    )

}

export default Run;