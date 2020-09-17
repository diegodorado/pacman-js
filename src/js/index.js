import GameCoordinator from './gameCoordinator'
const educar =
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

const onLoad = () => {
  const gameCoordinator = new GameCoordinator()
  const txt = document.getElementById('mazetxt')
  txt.textContent = gameCoordinator.maze
  //quick and dirty
  document.getElementById('mazetxt2').textContent = educar
}

window.addEventListener('load', onLoad)
