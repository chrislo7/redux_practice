const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

const login = () => {
    return {
        type: "SIGN_IN"
    }
}

const logout = () => {
    return {
        type: "SIGN_OUT"
    }
}

export { increment, decrement, login, logout }