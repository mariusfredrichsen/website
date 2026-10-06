// src/leaflet-providers.d.ts
import "leaflet";

declare module "leaflet" {
	namespace tileLayer {
		function provider(
			name: string,
			options?: TileLayerOptions
		): TileLayer;
	}
}
