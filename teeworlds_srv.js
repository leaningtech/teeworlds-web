let data = [
	{
		key: "key1",
		name: "test1",
		map: "dm1",
		players: "2/8",
		continent: "Europe",
		latency: 50
	},
	{
		key: "key2",
		name: "test2",
		map: "dm2",
		players: "5/10",
		continent: "America",
		latency: 220
	},
	{
		key: "key3",
		name: "test3",
		map: "dm1",
		players: "0/8",
		continent: "Africa",
		latency: 312
	},
	{
		key: "key4",
		name: "test4",
		map: "dm1",
		players: "8/8",
		continent: "Asia",
		latency: 530
	}
];
for (let r of data) {
	addServerRow(r);
}

function start() {
	alert("Starting (not implemented)");
}
