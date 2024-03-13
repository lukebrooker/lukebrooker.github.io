import { SizableText, styled } from 'tamagui'

export const Text = styled(SizableText, {
  color: '$default',
  fontFamily: '$body',
  variants: {
    typescale: {
      $1: {
        fontSize: '$sm1',
        lineHeight: '$sm1',
        $gtSm: {
          fontSize: '$md1',
          lineHeight: '$md1'
        },
        $gtMd: {
          fontSize: '$lg1',
          lineHeight: '$lg1'
        }
      },
      $2: {
        fontSize: '$sm2',
        lineHeight: '$sm2',
        $gtSm: {
          fontSize: '$md2',
          lineHeight: '$md2'
        },
        $gtMd: {
          fontSize: '$lg2',
          lineHeight: '$lg2'
        }
      },
      $3: {
        fontSize: '$sm3',
        lineHeight: '$sm3',
        $gtSm: {
          fontSize: '$md3',
          lineHeight: '$md3'
        },
        $gtMd: {
          fontSize: '$lg3',
          lineHeight: '$lg3'
        }
      },
      $4: {
        fontSize: '$sm4',
        lineHeight: '$sm4',
        $gtSm: {
          fontSize: '$md4',
          lineHeight: '$md4'
        },
        $gtMd: {
          fontSize: '$lg4',
          lineHeight: '$lg4'
        }
      },
      $5: {
        fontSize: '$sm5',
        lineHeight: '$sm5',
        $gtSm: {
          fontSize: '$md5',
          lineHeight: '$md5'
        },
        $gtMd: {
          fontSize: '$lg5',
          lineHeight: '$lg5'
        }
      },
      $6: {
        fontSize: '$sm6',
        lineHeight: '$sm6',
        $gtSm: {
          fontSize: '$md6',
          lineHeight: '$md6'
        },
        $gtMd: {
          fontSize: '$lg6',
          lineHeight: '$lg6'
        }
      },
      $7: {
        fontSize: '$sm7',
        lineHeight: '$sm7',
        $gtSm: {
          fontSize: '$md7',
          lineHeight: '$md7'
        },
        $gtMd: {
          fontSize: '$lg7',
          lineHeight: '$lg7'
        }
      },
      $8: {
        fontSize: '$sm8',
        lineHeight: '$sm8',
        $gtSm: {
          fontSize: '$md8',
          lineHeight: '$md8'
        },
        $gtMd: {
          fontSize: '$lg8',
          lineHeight: '$lg8'
        }
      },
      $9: {
        fontSize: '$sm9',
        lineHeight: '$sm9',
        $gtSm: {
          fontSize: '$md9',
          lineHeight: '$md9'
        },
        $gtMd: {
          fontSize: '$lg9',
          lineHeight: '$lg9'
        }
      },
      $10: {
        fontSize: '$sm10',
        lineHeight: '$sm10',
        $gtSm: {
          fontSize: '$md10',
          lineHeight: '$md10'
        },
        $gtMd: {
          fontSize: '$lg10',
          lineHeight: '$lg10'
        }
      }
    }
  } as const,
  defaultVariants: {
    typescale: '$3'
  }
})
