// noinspection TypeScriptValidateTypes

import fs from 'fs';
import mkdirp from 'mkdirp';
import lodash from 'lodash';
import { logger } from './chalkLogs';

const { upperFirst, camelCase } = lodash;

const createDirectory = (path: string) => {
	try {
		fs.accessSync(path, fs.constants.X_OK);
		logger(`Directory exists at ${path}`, 'info', 'bold');
	} catch (error) {
		logger(`Success: Creating Directory ${path}`, 'success', 'bold')
		mkdirp.sync(path);
	}
};

const deleteDirectory = (dir) => {
	fs.rmdirSync(dir, (err) => {
		if (err) throw err;
		logger(`${dir} has successfully been deleted`, 'warn');
	});
};

const removeDirContent = async (dir) => {
	try {
		logger(`Success: removing content from ${dir}`, 'success', 'bold');
		fs.rmSync(dir, { recursive: true });
		logger(` Content of ${dir} has been removed`, 'warn', 'italic');
	} catch (error) {
		logger(`Error: Removing content from ${dir}`, 'error');
	}
};

const writeToFile = (filename, data, p: (error) => void) => {
	fs.writeFileSync(filename, data, (error) => {
		if (error) throw error;
		logger(`File has been saved: ${filename}`, 'success');
	});
};

const writeBarrelFile = (path, data) => {
	fs.writeFileSync(path, data);
	logger(`Successfully generated barrel file at ${path}`, 'success', 'bold' )
};

const formatNames = (names) => {
	if (names.includes('.svg')) {
		const removeFileTypeName = names.split('.svg').join('');
		const camelCaseName = camelCase ? camelCase(removeFileTypeName) : '';
		return upperFirst ? upperFirst(camelCaseName) : '';
	}
};

export default {
	createDirectory,
	deleteDirectory,
	removeDirContent,
	writeToFile,
	writeBarrelFile,
	formatNames,
};
