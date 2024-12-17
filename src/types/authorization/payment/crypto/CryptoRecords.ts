export type BitcoinNewDetails = {
    BitcoinRecieveAddress: string;
    SatoshiPerMonth: number;
}

export type CryptoNewDetails = {
    Bitcoin: BitcoinNewDetails;
}