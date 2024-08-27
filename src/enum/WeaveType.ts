enum WeaveType {
    Plain = 10,
    PlainLowered = 11,
    Twill = 20,
    TwillLowered = 21,
    Satin = 30,
    SatinLowered = 31
}

const LIFTED_START = [WeaveType.Plain, WeaveType.Satin, WeaveType.Twill]

export { WeaveType, LIFTED_START }