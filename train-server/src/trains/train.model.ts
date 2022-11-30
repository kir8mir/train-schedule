export interface RouteInfo {
  routeInfo: [
    {
      date: [
        {
          city: string;
        },
      ];
    },
  ];
}

export class Train {
  constructor(
    public id: string,
    public name: string,
    public routeInfo: RouteInfo,
  ) {}
}
