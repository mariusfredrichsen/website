// src/leaflet-providers.d.ts
import * as L from "leaflet";

declare module "leaflet" {
	namespace tileLayer {
		function provider(
			name: string,
			options?: TileLayerOptions
		): TileLayer;
	}
}
