export default {
  fetch(_request, env) {
    return new Response(env.EXAMPLE_TEXT);
  },
} satisfies ExportedHandler<Env>;
