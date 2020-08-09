export function getQuestionNumber() {
    const pathname = window.location.pathname
    return parseInt(pathname.substring(1))
}