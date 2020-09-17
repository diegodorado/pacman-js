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

console.log( window.innerWidth, window.innerHeight, document.documentElement.clientWidth,document.documentElement.clientHeight)
const onLoad = () => {
  console.log( window.innerWidth, window.innerHeight, document.documentElement.clientWidth,document.documentElement.clientHeight)
  const gameCoordinator = new GameCoordinator()
  const txt = document.getElementById('mazetxt')
  txt.textContent = gameCoordinator.maze
  //quick and dirty
  document.getElementById('mazetxt2').textContent = educar
}

window.addEventListener('load', ()=>{
  console.log('loaded')
  console.log( window.innerWidth, window.innerHeight, document.documentElement.clientWidth,document.documentElement.clientHeight)
})
setTimeout( onLoad, 1000)
