import boom from '@hapi/boom';

const scopesValidationHandler = (allowedScopes: any) => {
  return (req: any, res: any, next: any) => {
    if (!req.user && (req.user || req.user.scopes)) {
      next(boom.unauthorized('Missing scopes'));
    }

    const hasAcces = allowedScopes.map((allowedScopes: any) => req.user.scopes.includes(allowedScopes))
      .find((allowed: any) => Boolean(allowed));

    if (hasAcces) {
      next();
    } else {
      next(boom.unauthorized('Insuficientes scopes'));
    }
  }
};

export default scopesValidationHandler;