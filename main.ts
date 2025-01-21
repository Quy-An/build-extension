namespace AnBuildExtension{

    //% blockId=AnBuildExtensionplotat
    //% block="plot at $index"
    //% index.min=0 index.max=25
    export function plotAt(index: number): void{
        const x = Math.floor(index % 5);
        const y = Math.floor(index / 5);
        led.plot(x, y)
    }
}