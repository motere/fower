import React from 'react'
import { View, Heading } from '@styli/react'

enum IMAGEs {
  DEFAULT_AVATAR = 'https://swspcdn.xishanju.com/matter/59d98ff1cb756253c8957fd9871afd9fe9bb38a3.png',
}

export const Background = () => {
  return (
    <View>
      <Heading f-30 fontBold>
        Background
      </Heading>

      <View f-20 bgRed50>
        BgRed50
      </View>

      <View f-20 bgColor="#000.5">
        bg #000.5
      </View>

      <View f-20 bgRed50 bgGreen50--hover>
        bgGreen50--hover
      </View>

      <View f-20 bg="#000" bg--hover="#000.5">
        bg--hover="#000.5"
      </View>

      <View f-20 bgColor={['yellowgreen', 'deeppink', 'gray', 'info']}>
        backgroundColor=['yellowgreen', 'deeppink', 'gray', 'info']
      </View>

      <View f-10 bg={`url(${IMAGEs.DEFAULT_AVATAR}) center 100%`} circle-200 center>
        bg="url('https://...') center 100%"
      </View>

      <View
        f-10
        bgImg={IMAGEs.DEFAULT_AVATAR}
        bgSize="100p"
        bgPos="center"
        circle-200
        center
        column
      >
        <View>bgImg="https://..."</View>
        <View>bgSize="100p"</View>
        <View>bgPos="center"</View>
      </View>
    </View>
  )
}
