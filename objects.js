var playlist = {Zeppelin: 'Stairway To Heaven'}
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {artistName: songTitle})
}
