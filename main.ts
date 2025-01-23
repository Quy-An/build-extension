namespace AnBuildExtension{

    //% blockId=AnBuildExtensionplotat
    //% block="plot at $index"
    //% index.min=0 index.max=25
    export function plotAt(index: number): void{
        const x = Math.floor(index % 5);
        const y = Math.floor(index / 5);
        led.plot(x, y)
    }

    //% block="send I2C data: $addr $data1, $data2, $data3, $data4, $data5, $data6"
    export function sendI2CData(addr: number, data1: number, data2: number, data3: number, data4: number, data5: number, data6: number): void {
        let dataToSend: number[] = [data1, data2, data3, data4, data5, data6];
        let buffer = pins.createBuffer(dataToSend.length);
        for (let i = 0; i < dataToSend.length; i++) {
            buffer.setUint8(i, dataToSend[i]);
        }
        pins.i2cWriteBuffer(addr, buffer);
    }


}