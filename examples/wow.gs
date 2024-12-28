on script load {
	var stone = player("Nuutrai") 
	if (stone.isTicking) {
		send "hello" to stone
	}
}