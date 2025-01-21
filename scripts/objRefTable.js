const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Car,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.Car.Exps.Speed,
		C3.Plugins.System.Acts.SetLayerScale,
		C3.Plugins.System.Exps.layerscale
	];
};
self.C3_JsPropNameTable = [
	{Car: 0},
	{ScrollTo: 0},
	{Road: 0},
	{Solid: 0},
	{Barrier: 0},
	{Text: 0},
	{TiledBackground: 0},
	{IntendedScale: 0}
];

self.InstanceType = {
	Car: class extends self.ISpriteInstance {},
	Road: class extends self.ITiledBackgroundInstance {},
	Barrier: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {}
}