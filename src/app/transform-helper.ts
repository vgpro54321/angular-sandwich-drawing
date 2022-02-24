export class TransformHelper {
  static transform(
    context: OffscreenCanvasRenderingContext2D,
    angle: number
  ): void {
    const angleNormalized = TransformHelper.normalizeAngle(angle);
  }
}
