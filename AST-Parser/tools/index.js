
import path from 'path'
const globListFilter = (list = []) => {
    return list.map(item => globFilter(item))
}
const globFilter = (str = '') => {
    return str.split(path.sep).join('/')
}

export {
    globFilter,
    globListFilter
}