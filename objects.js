var playlist = {Zeppelin: 'Stairway To Heaven'}
function updatePlaylist(obj, string, title) {
  Object.assign({}, obj, {string: title})
}
