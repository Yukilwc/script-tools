import path from 'path'
import {
    globFilter,
    globListFilter
} from '../tools/index'
export const currentPath = `D:\\workspace\\libiary\\my\\script-tools\\AST-Parser\\`
// export const targetPath = `D:\\workspace\\work\\minapp\\etransmp3\\`
export const targetPath = `D:\\workspace\\ForTest\\etransmp3\\`
// export const currentPath = `C:\\My\\Workspace\\Tools\\script-tools\\AST-Parser\\`
// export const targetPath = `D:\\glob\\`

export const ext1 = '!' + globFilter(path.resolve(targetPath, "./node_modules/")) + '/**'
export const ext2 = '!' + globFilter(path.resolve(targetPath, "./.git/")) + '/**'
export const ext3 = '!' + globFilter(path.resolve(targetPath, "./lib/")) + '/**'
export const ext4 = '!' + globFilter(path.resolve(targetPath, "./pages/webview")) + '/**'
export const commonExt = [ext1, ext2, ext3, ext4]
export const extJson = '!' + globFilter(path.resolve(targetPath, "./*.json"))
