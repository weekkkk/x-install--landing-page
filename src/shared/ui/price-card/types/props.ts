export type UiPriceCardProps = {
  service: string,
  serviceAccent: string,
  serviceDescription: string,
  guarantees: string[],
  price?: string,
  isUnitPrice?: boolean,
  md: {
    service: string,
    serviceAccent: string,
    serviceDescription: string,
    guarantees?: string[]
  }
}