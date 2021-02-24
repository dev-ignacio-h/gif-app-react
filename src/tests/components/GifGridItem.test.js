import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Tests in GifGridItem component', () => {
  const title = 'A title';
  const url = 'https://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should display the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a paragraph with the title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('should have the image equal to the url and alt of the props', () => {
    const img = wrapper.find('img');
    // console.log(img.props().src === img.prop('src'));
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('should have class animate__bounce', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')
    // console.log(div.prop('className').includes('animate__bounce'));
    expect(className.includes('animate__bounce')).toBe(true)
  });
});
