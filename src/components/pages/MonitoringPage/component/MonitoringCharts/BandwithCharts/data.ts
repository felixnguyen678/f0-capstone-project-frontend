const xlabels = [
  '10:05',
  '10:10',
  '10:15',
  '10:20',
  '10:25',
  '10:30',
  '10:35',
  '10:40',
  '10:45',
  '10:50',
  '10:55',
  '11:00'
]

export const data = {
  labels: xlabels,
  datasets: [
    {
      label: 'public - inbound',
      backgroundColor: 'rgba(255, 109, 143, 0.1)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 35, 5, 2, 20, 30, 35],
      fill: true
    },
    {
      label: 'public - outbound',
      backgroundColor: 'rgba(247, 219, 206, 0.2)',
      borderColor: 'rgb(219, 97, 35)',
      data: [10, 30, 20, 5, 25, 25, 30, 10, 20, 10, 10, 30],
      fill: true
    },
    {
      label: 'private - inbound',
      backgroundColor: 'rgba(216, 219, 35, 0.5)',
      borderColor: 'rgb(216, 219, 35)',
      data: [0, 5, 2, 20, 30, 35, 40, 30, 20, 5, 25, 40, 10],
      fill: true
    },
    {
      label: 'private - outbound',
      backgroundColor: 'rgba(165, 236, 237, 0.5)',
      borderColor: 'rgb(35, 216, 219)',
      data: [30, 20, 10, 30, 20, 0, 5, 2, 20, 30, 25, 5, 5],
      fill: true
    }
  ]
}
