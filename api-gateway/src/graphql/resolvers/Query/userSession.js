const userSessionResolver = async (obj, args, context) => {
  if (!args.me !== true) throw new Error('Unsupported argument value');
  return context.userSessionResolver.locals.userSession;
};

export default userSessionResolver;
