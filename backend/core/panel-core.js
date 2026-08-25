const state = {
  servers: new Map(),
};

export const panelCore = {
  listServers() {
    return [...state.servers.values()];
  },

  getServer(id) {
    return state.servers.get(id) ?? null;
  },

  async startServer(id) {
    const server = state.servers.get(id);
    if (!server) throw new Error('Server not found');
    return { ok: false, reason: 'ENGINE_NOT_CONNECTED', server };
  },

  async stopServer(id) {
    const server = state.servers.get(id);
    if (!server) throw new Error('Server not found');
    return { ok: false, reason: 'ENGINE_NOT_CONNECTED', server };
  },

  async restartServer(id) {
    const server = state.servers.get(id);
    if (!server) throw new Error('Server not found');
    return { ok: false, reason: 'ENGINE_NOT_CONNECTED', server };
  },

  async getLogs(id) {
    const server = state.servers.get(id);
    if (!server) throw new Error('Server not found');
    return [];
  },
};
