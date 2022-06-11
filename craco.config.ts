import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin'

export const webpack = {
  plugins: {
    add: [new VanillaExtractPlugin()],
  },
}
