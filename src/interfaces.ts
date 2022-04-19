interface IDevice {
  guids: []
  icon: {
    id: string,
    resolutions: [
      [number, number]
    ]
  }
  line: {
    id: string,
    name: string,
  }
  product: {
    abbrev: string,
    name: string,
  }
  shortnames: [string]
  triplets: [
    {
      k2: string,
      k1: string,
    }
  ]
}

export type {
  IDevice,
}