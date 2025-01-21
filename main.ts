namespace AnBuildExtension{
    export function plotAt(index: number): void{
        const x = Math.floor(index % 5);
        const y = Math.floor(index / 5);
        led.plot(x, y)
    }
}