namespace AnBuildExtension{

    //% blockId=AnBuildExtensionplotat
    //% block="plot at $index"
    //% index.min=0 index.max=24 
    export function plotAt(index: number): void{
        const x = Math.floor(index % 5);
        const y = Math.floor(index / 5);
        led.plot(x, y)
    }

    //% block="set newAddress $newAddress."
    //% newAddress.min=64 newAddress.max=68
    export function setAddress(newAddress: number): void {
        let dataToSend: number[] = [newAddress, 2, 0, 0, 0, (newAddress+2)];
        let buffer = pins.createBuffer(dataToSend.length);
        let oldAddress = 64;
        for (let i = 0; i < dataToSend.length; i++) {
            buffer.setUint8(i, dataToSend[i]);
        }

        for (let i = 64; i < 69; i++) {
            pins.i2cWriteNumber(i, 1, NumberFormat.UInt8LE, false)
            let data = pins.i2cReadNumber(i, NumberFormat.UInt8LE)
            if (data == 1) {
                oldAddress = i;
            }
        }

        pins.i2cWriteBuffer(oldAddress, buffer);
    }


}