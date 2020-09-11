import GameCoordinator from './gameCoordinator'

const gameCoordinator = new GameCoordinator();
const txt = document.getElementById('mazetxt')
txt.textContent = gameCoordinator.maze
txt.style = 'opacity:0.6;position: absolute;white-space: pre;white-space: pre;font-family: monospace;font-weight: bold;color: cyan;line-height: 0.62em;font-size: 1.662em;'

