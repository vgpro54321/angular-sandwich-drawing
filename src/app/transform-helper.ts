export class TransformHelper {
  static transform(
    context: CanvasRenderingContext2D,
    angleDegrees: number,
    w: number,
    h: number
  ): void {
    const angleDegreesNormalized = TransformHelper.normalizeAngle(angleDegrees);

    switch (angleDegrees) {
      case 0: {
        break;
      }

      case 90: {
        context.rotate(Math.PI / 2);
        context.translate(0, -h);

        break;
      }

      case 180: {
        context.rotate(Math.PI);
        context.translate(-w, -h);
        break;
      }

      case 270: {
        context.rotate(Math.PI * 1.5);
        context.translate(-w, 0);
        break;
      }

      default:
        throw new Error('Angle must be a multiple of 90 degrees.');
    }
  }

  static normalizeAngle(angleDegrees: number): number {
    let rem = angleDegrees % 360;
    if (rem < 0) {
      rem += 360;
    }

    return rem;
  }
}
