import { withKnobs, text } from '@storybook/addon-knobs'
import { Meta, Story } from '@storybook/react/types-6-0'
import Main from './'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Text Title', 'React Avançado')}
    description={text(
      'Text Description',
      'TypeScript, ReactJs, NextJs e Styled Components'
    )}
  />
)
