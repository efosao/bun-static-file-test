// static file server
Bun.serve({
  async fetch(req) {
    const filepath = "./girl.jpg";
    const file = Bun.file(filepath);
    return new Response(file);
  }
});
