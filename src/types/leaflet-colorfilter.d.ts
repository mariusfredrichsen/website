import "leaflet";

declare module "leaflet" {
	namespace tileLayer {
		function colorFilter(
			urlTemplate: string,
			options?: L.TileLayerOptions & { filter?: string[] }
		): L.TileLayer;
	}
}
