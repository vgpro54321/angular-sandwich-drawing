export class TransformHelper {
  static transform(
    context: OffscreenCanvasRenderingContext2D,
    angle: number
  ): void {
    const angleNormalized = TransformHelper.normalizeAngle(angle);

    switch (angle) {
      case 90: {
        break;
      }

      case 180: {
        break;
      }

      case 270: {
        break;
      }

      default:
        throw new Error('Angle must be a multiple of 90 degrees.');
    }
  }

  static normalizeAngle(angle: number): number {
    let rem = angle % 360;
    if (rem < 0) {
      rem += 360;
    }

    return rem;
  }
}
