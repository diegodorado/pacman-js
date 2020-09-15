import GameCoordinator from './gameCoordinator'
import blinky from '/static/images/characters/ghosts/blinky/blinky_down.svg'

console.log(blinky)

const gameCoordinator = new GameCoordinator()
const txt = document.getElementById('mazetxt')
txt.textContent = gameCoordinator.maze

//quick and dirty
document.getElementById('mazetxt2')
  .textContent =
`






 
                   ╭╮                                        
                   ││                                        
                   ││                                        
      ╭─────╮ ╭────╯│ ╭╮   ╭╮ ╭─────╮    ╭─────╮ ╭───╮       
      │ ╭─╮ │ │     │ ││   ││ │╭────╯    ╰────╮│ │╭──╯       
      │ ╰─╯ │ │ ╭─╮ │ ││   ││ ││              ││ ││          
      │╭────╯ │ │ │ │ ││   ││ ││         ╭────╯│ ││          
      ││      │ ╰─╯ │ ││   ││ ││         │ ╭─╮ │ ││          
      │╰────╮ │     │ │╰───╯│ │╰────╮ ╭╮ │ ╰─╯ │ ││          
      ╰─────╯ ╰─────╯ ╰─────╯ ╰─────╯ ╰╯ ╰─────╯ ╰╯          
`


