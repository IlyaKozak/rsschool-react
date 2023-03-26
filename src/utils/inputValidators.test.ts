import {
  getAuthorValidationText,
  getImageValidationText,
  getPublishedDateValidationText,
  getTitleValidationText,
  getValidationRequiredText,
  getValidationText,
} from './inputsValidators';

describe('getAuthorValidationText', () => {
  it('returns null if the text is valid', () => {
    expect(getAuthorValidationText('Author')).toBeNull();
  });

  it('returns validation message if the text is invalid', () => {
    expect(getAuthorValidationText('22author')).not.toBeNull();
  });
});

describe('getTitleValidationText', () => {
  it('returns null if the text is valid', () => {
    expect(getTitleValidationText('Title')).toBeNull();
  });

  it('returns validation message if the text is invalid', () => {
    expect(getTitleValidationText('title')).not.toBeNull();
  });
});

describe('getPublishedDateValidationText', () => {
  it('returns null if the date is valid', () => {
    expect(getPublishedDateValidationText(new Date().toString())).toBeNull();
  });

  it('returns validation message if the date is invalid (<1970 or >today)', () => {
    expect(getPublishedDateValidationText(new Date('11-11-2222').toString())).not.toBeNull();
  });
});

describe('getValidationText', () => {
  it('returns null if the text is valid', () => {
    expect(getValidationText('Some Text')).toBeNull();
  });

  it('returns validation message if the text is invalid (empty string)', () => {
    expect(getValidationText('')).not.toBeNull();
  });
});

const BYTES_IN_ONE_KB = 1024;
const KB = 100;
const createMockFileList = (
  length = 1,
  type = 'image/png',
  ext = 'png',
  size = KB * BYTES_IN_ONE_KB
) => {
  const file = new File(['foo'], `foo.${ext}`, {
    type,
  });
  Object.defineProperty(file, 'size', { value: size });
  const mockFileList = Object.create(document.createElement('input').files);
  Object.defineProperty(mockFileList, 'length', { value: length });
  for (let i = 0; i < length; i++) {
    mockFileList[i] = file;
  }
  return mockFileList;
};

describe('getImageValidationText', () => {
  it('returns null if the file is image', () => {
    const mockFileList = createMockFileList(1, 'image/png', 'png');
    expect(getImageValidationText(mockFileList)).toBeNull();
  });

  it('returns validation message if the file is not image', () => {
    const mockFileList = createMockFileList(1, 'text/plane', 'txt');
    expect(getImageValidationText(mockFileList)).not.toBeNull();
  });

  it('returns validation message if the image size is large 250KB', () => {
    const mockFileList = createMockFileList(1, 'image/jpg', 'jpg', 255 * BYTES_IN_ONE_KB);
    expect(getImageValidationText(mockFileList)).not.toBeNull();
  });

  it('returns validation message if there are more than one file in filelist', () => {
    const mockFileList = createMockFileList(3, 'image/jpg', 'jpg');
    expect(getImageValidationText(mockFileList)).not.toBeNull();
  });
});

describe('getValidationRequiredText', () => {
  it('returns null if the checkbox is checked', () => {
    expect(getValidationRequiredText(true)).toBeNull();
  });

  it('returns validation message if the checkbox is not checked', () => {
    expect(getValidationRequiredText(false)).not.toBeNull();
  });
});
