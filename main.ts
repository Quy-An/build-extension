namespace AnBuildExtension{

    //% blockId=AnBuildExtensionplotat
    //% block="plot at $index"
    //% index.min=0 index.max=25
    export function plotAt(index: number): void{
        const x = Math.floor(index % 5);
        const y = Math.floor(index / 5);
        led.plot(x, y)
    }

    //% block="set oldAddress $oldAddress to newAddress $newAddress."
    export function setAddress(oldAddress: number, newAddress: number): void {
        let dataToSend: number[] = [newAddress, 2, 0, 0, 0, (newAddress+2)];
        let buffer = pins.createBuffer(dataToSend.length);
        for (let i = 0; i < dataToSend.length; i++) {
            buffer.setUint8(i, dataToSend[i]);
        }
        pins.i2cWriteBuffer(oldAddress, buffer);
    }


}