export default ()=> ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde omnis ",
      picture: null
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde omnis ",
      picture: null
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde omnis ",
      picture: null
    }
  ]
})