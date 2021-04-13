export const TOKEN_KEY = "cinemagic-Token"
export const isAuthenticaded = () => localStorage.getItem(TOKEN_KEY) !==null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("cliente")
}
export const cliente = () => localStorage.getItem("cliente")