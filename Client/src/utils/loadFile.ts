import PizZipUtils from 'pizzip/utils/index.js';

export default function loadFile(url: string, callback: (err: Error, data: string) => void) {
  PizZipUtils.getBinaryContent(url, callback);
}