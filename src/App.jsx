import './App.css'
import { useEffect, useRef } from 'react'
import Matter from 'matter-js'

function App() {
  const scene = useRef()

  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies

    // create engine
    var engine = Engine.create(),
      world = engine.world

    // create renderer
    var render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        showAngleIndicator: false,
        wireframes: false,
      },
    })

    Render.run(render)

    // create runner
    var runner = Runner.create()
    Runner.run(runner, engine)

    world.bodies = []

    // these static walls will not be rendered in this sprites example, see options
    Composite.add(world, [
      Bodies.rectangle(
        scene.current.clientWidth / 2,
        scene.current.clientHeight + 30,
        scene.current.clientWidth,
        60,
        {
          isStatic: true,
          label: 'Ground',
        },
      ),
      Bodies.rectangle(
        -30,
        scene.current.clientHeight / 2,
        60,
        scene.current.clientHeight,
        {
          isStatic: true,
          label: 'Wall Left',
        },
      ),
      Bodies.rectangle(
        scene.current.clientWidth + 30,
        scene.current.clientHeight / 2,
        60,
        scene.current.clientHeight,
        {
          isStatic: true,
          label: 'Wall Right',
        },
      ),
    ])

    const assets = [
      'Graphic_Element_Morin_apricot 1.svg',
      'Graphic_Element_Morin_apricot 2.svg',
      'Graphic_Element_Morin_blueberry 1.svg',
      'Graphic_Element_Morin_blueberry 2.svg',
      'Graphic_Element_Morin_orange 1.svg',
      'Graphic_Element_Morin_orange 2.svg',
      'Graphic_Element_Morin_orange 3.svg',
      'Graphic_Element_Morin_orange 4.svg',
      'Graphic_Element_Morin_raspberry 1.svg',
      'Graphic_Element_Morin_raspberry 2.svg',
    ]

    let stack = []

    assets.forEach((data, id) => {
      if (id === 0) {
        stack.push(
          Composites.stack(
            scene.current.clientWidth / 6,
            -300,
            1,
            1,
            10,
            10,
            function (x, y) {
              return Bodies.circle(x, y, 55, {
                render: {
                  strokeStyle: '#ffffff',
                  sprite: {
                    texture: `./assets/${data}`,
                    xScale: 1.3,
                    yScale: 1.3
                  },
                },
              })
            },
          ),
          Composites.stack(
            scene.current.clientWidth - scene.current.clientWidth / 5,
            -200,
            1,
            1,
            10,
            10,
            function (x, y) {
              return Bodies.circle(x, y, 55, {
                render: {
                  strokeStyle: '#ffffff',
                  sprite: {
                    texture: `./assets/${data}`,
                    xScale: 1.3,
                    yScale: 1.3
                  },
                },
              })
            },
          ),
          Composites.stack(
            scene.current.clientWidth / 6,
            -100,
            1,
            1,
            10,
            10,
            function (x, y) {
              return Bodies.circle(x, y, 55, {
                render: {
                  strokeStyle: '#ffffff',
                  sprite: {
                    texture: `./assets/${data}`,
                    xScale: 1.3,
                    yScale: 1.3
                  },
                },
              })
            },
          ),
          Composites.stack(
            scene.current.clientWidth - scene.current.clientWidth / 5,
            -300,
            1,
            1,
            10,
            10,
            function (x, y) {
              return Bodies.circle(x, y, 55, {
                render: {
                  strokeStyle: '#ffffff',
                  sprite: {
                    texture: `./assets/${data}`,
                    xScale: 1.3,
                    yScale: 1.3
                  },
                },
              })
            },
          ),
        )
      } else if (id === 1) {
        stack.push(
          Composites.stack(
            scene.current.clientWidth / 6 + 80,
            -400,
            1,
            1,
            10,
            10,
            function (x, y) {
              return Bodies.circle(x, y, 55, {
                render: {
                  strokeStyle: '#ffffff',
                  sprite: {
                    texture: `./assets/${data}`,
                    xScale: 1.3,
                    yScale: 1.3
                  },
                },
              })
            },
          ),
          Composites.stack(
            scene.current.clientWidth - scene.current.clientWidth / 3 + 80,
            -300,
            1,
            1,
            10,
            10,
            function (x, y) {
              return Bodies.circle(x, y, 55, {
                render: {
                  strokeStyle: '#ffffff',
                  sprite: {
                    texture: `./assets/${data}`,
                    xScale: 1.3,
                    yScale: 1.3
                  },
                },
              })
            },
          ),
          Composites.stack(
            scene.current.clientWidth / 6 + 80,
            -200,
            1,
            1,
            10,
            10,
            function (x, y) {
              return Bodies.circle(x, y, 55, {
                render: {
                  strokeStyle: '#ffffff',
                  sprite: {
                    texture: `./assets/${data}`,
                    xScale: 1.3,
                    yScale: 1.3
                  },
                },
              })
            },
          ),
          Composites.stack(
            scene.current.clientWidth - scene.current.clientWidth / 3 + 80,
            -300,
            1,
            1,
            10,
            10,
            function (x, y) {
              return Bodies.circle(x, y, 55, {
                render: {
                  strokeStyle: '#ffffff',
                  sprite: {
                    texture: `./assets/${data}`,
                    xScale: 1.3,
                    yScale: 1.3
                  },
                },
              })
            },
          ),
        )
      } else {
        stack.push(
          Composites.stack(
            scene.current.clientWidth / 6 + 80 * id,
            -500,
            1,
            1,
            10,
            10,
            function (x, y) {
              return Bodies.circle(x, y, 55, {
                render: {
                  strokeStyle: '#ffffff',
                  sprite: {
                    texture: `./assets/${data}`,
                    xScale: 1.3,
                    yScale: 1.3
                  },
                },
              })
            },
          ),
          Composites.stack(
            scene.current.clientWidth - scene.current.clientWidth + 80 * id,
            -400,
            1,
            1,
            10,
            10,
            function (x, y) {
              return Bodies.circle(x, y, 55, {
                render: {
                  strokeStyle: '#ffffff',
                  sprite: {
                    texture: `./assets/${data}`,
                    xScale: 1.3,
                    yScale: 1.3
                  },
                },
              })
            },
          ),
          Composites.stack(
            scene.current.clientWidth / 6 + 80 * id,
            -300,
            1,
            1,
            10,
            10,
            function (x, y) {
              return Bodies.circle(x, y, 55, {
                render: {
                  strokeStyle: '#ffffff',
                  sprite: {
                    texture: `./assets/${data}`,
                    xScale: 1.3,
                    yScale: 1.3
                  },
                },
              })
            },
          ),
          Composites.stack(
            scene.current.clientWidth - scene.current.clientWidth + 80 * id,
            -300,
            1,
            1,
            10,
            10,
            function (x, y) {
              return Bodies.circle(x, y, 55, {
                render: {
                  strokeStyle: '#ffffff',
                  sprite: {
                    texture: `./assets/${data}`,
                    xScale: 1.3,
                    yScale: 1.3
                  },
                },
              })
            },
          ),
        )
      }
    })

    stack.forEach((data) => {
      Composite.add(world, [data])
    })

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      })

    Composite.add(world, mouseConstraint)

    // keep the mouse in sync with rendering
    render.mouse = mouse
  }, [])
  return <div ref={scene} />
}

export default App
