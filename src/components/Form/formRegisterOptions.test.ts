import {
  authorRegisterOptions,
  titleRegisterOptions,
  publishedRegisterOptions,
  imageRegisterOptions,
} from './formRegisterOptions';

describe('authorRegisterOptions', () => {
  it('returns null if the text is valid', () => {
    expect(authorRegisterOptions.pattern.value.test('Author')).toEqual(true);
  });

  it('returns validation message if the text is invalid', () => {
    expect(authorRegisterOptions.pattern.value.test('22author')).toEqual(false);
  });
});

describe('titleRegisterOptions', () => {
  it('returns null if the text is valid', () => {
    expect(titleRegisterOptions.pattern.value.test('Title')).toEqual(true);
  });

  it('returns validation message if the text is invalid', () => {
    expect(titleRegisterOptions.pattern.value.test('title')).toEqual(false);
  });
});

describe('publishedRegisterOptions', () => {
  it('returns null if the date is valid', () => {
    expect(publishedRegisterOptions.validate(new Date())).toEqual(true);
  });

  it('returns validation message if the date is invalid (<1970 or >today)', () => {
    expect(publishedRegisterOptions.validate(new Date('11-11-2222'))).not.toEqual(true);
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

describe('imageRegisterOptions', () => {
  it('returns null if the file is image', () => {
    const mockFileList = createMockFileList(1, 'image/png', 'png');
    expect(imageRegisterOptions.validate(mockFileList)).toEqual(true);
  });

  it('returns validation message if the file is not image', () => {
    const mockFileList = createMockFileList(1, 'text/plane', 'txt');
    expect(imageRegisterOptions.validate(mockFileList)).not.toEqual(true);
  });

  it('returns validation message if the image size is large 250KB', () => {
    const mockFileList = createMockFileList(1, 'image/jpg', 'jpg', 255 * BYTES_IN_ONE_KB);
    expect(imageRegisterOptions.validate(mockFileList)).not.toEqual(true);
  });

  it('returns validation message if there are more than one file in filelist', () => {
    const mockFileList = createMockFileList(3, 'image/jpg', 'jpg');
    expect(imageRegisterOptions.validate(mockFileList)).not.toEqual(true);
  });
});
