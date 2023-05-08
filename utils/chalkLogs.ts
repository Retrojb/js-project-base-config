import chalk from 'chalk';

 const errorLogBold = chalk.bold.red;
 const errorLogItalic = chalk.italic.red;
 const errorLog = chalk.red;

 const warnLogBold = chalk.bold.yellow;
 const warnLogItalic = chalk.italic.yellow;
 const warnLog = chalk.yellow;

 const successLogBold = chalk.bold.green;
 const successLogItalic = chalk.italic.green;
 const successLog = chalk.green;

 const infoLogItalic = chalk.italic.blue;
 const infoLogBold = chalk.bold.blue;
 const infoLog = chalk.blue;

export const logger = (msg: string | number | object, type?: string, format?: string) => {
	// const errorLogging = errorLogBold ? 'bold' : errorLogItalic ? 'italic' : errorLog;
	if (type === 'error' && format === 'bold') {
		console.log(errorLogBold(msg));
	}
	if (type === 'error' && format === 'italic') {
			console.log(errorLogItalic(msg));
	} if (type === 'error' && format ==='') {
			console.log(errorLog(msg));
	}
	if (type === 'info' && format === 'bold') {
		console.log(infoLogBold(msg))
	}
	if (type === 'info' && format === 'italic') {
			console.log(infoLogItalic(msg));
	}
	if (type === 'info' && format === '') {
		console.log(infoLog(msg));
	}
	if (type === 'success' && format ==='bold') {
		console.log(successLogBold(msg))
	}
	if (type === 'success' && format === 'italic') {
			console.log(successLogItalic(msg));
	}
	if (type === 'success' && format === '') {
		console.log(successLog(msg));
	}
	if (type === 'warn' && format === 'bold') {
			console.log(warnLogBold(msg))
	}
	if (type ==='warn' && format === 'italic') {
			console.log(warnLogItalic(msg));
	}
	if (type === 'warn' && format === '') {
		console.log(warnLog(msg));
	}
}

export default { logger };

