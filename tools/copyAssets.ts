import * as shell from 'shelljs'

shell.rm('-rf', 'dist/src/views')
shell.cp('-R', 'src/views', 'dist/src/')
