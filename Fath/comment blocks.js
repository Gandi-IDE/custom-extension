class CommentBlocks {
    constructor(runtime) {
    this.runtime = runtime
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'CmntExt.extensionName': "评论区",
        'CmntExt.descriptionProjectName': '👑 项目名称：[NAME]',
        'CmntExt.descriptionDescription': '👉项目描述：[DESCRIPTION]',
        'CmntExt.descriptionCredit': '👉 👉 致谢：[NAME]',
        'CmntExt.commentHat': '[COMMENT]',
        'CmntExt.commentCommand': '[COMMENT]',
        'CmntExt.commentCap': '[COMMENT]',
        'CmntExt.commentReporter': '[INPUT] [COMMENT]',
        'CmntExt.commentReporter2': '[COMMENT] [INPUT]',
        'CmntExt.commentReporter3': '[COMMENT]',
        'CmntExt.commentBoolean': '[INPUT] [COMMENT]',
        'CmntExt.commentBoolean2': '[COMMENT] [INPUT]',
        'CmntExt.commentBoolean3': '[COMMENT]',
        'CmntExt.commentConditional': '[COMMENT]',
        'CmntExt.commentLoop': '[COMMENT]',
      },
  
      en: {
        'CmntExt.extensionName': "Comment blocks",
        'CmntExt.descriptionProjectName': '👑 Project name: [NAME]',
        'CmntExt.descriptionDescription': '👉 Project description: [DESCRIPTION]',
        'CmntExt.descriptionCredit': '👉 👉 Credits to: [NAME]',
        'CmntExt.commentHat': '[COMMENT]',
        'CmntExt.commentCommand': '[COMMENT]',
        'CmntExt.commentCap': '[COMMENT]',
        'CmntExt.commentReporter': '[INPUT] [COMMENT]',
        'CmntExt.commentReporter2': '[COMMENT] [INPUT]',
        'CmntExt.commentReporter3': '[COMMENT]',
        'CmntExt.commentBoolean': '[INPUT] [COMMENT]',
        'CmntExt.commentBoolean2': '[COMMENT] [INPUT]',
        'CmntExt.commentBoolean3': '[COMMENT]',
        'CmntExt.commentConditional': '[COMMENT]',
        'CmntExt.commentLoop': '[COMMENT]',
      },
    })
  }
  
  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    })
  }
  
    getInfo() {
      return {
        id: "commentblocks",
        name: this.formatMessage('CmntExt.extensionName'),
        color1: "#191e25",
        color2: "#191e25",
        color3: "#191919",
        blockIconURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAGKdJREFUeF7tXHlUlOX+/7zLrAyruCK7KJoSCkqsDqCUZt3cU0u9lbgDpXa1TO1at9yVxQUp0zT1mpqlFSqILOKGKG4BCqiIooLAMMz2Lr/zDHZP556G9JcD53qac/CvZ17f5zPf7/P5fLeHwl+fP4UA9ae+/deX8ReAf9II/gLwfx1AEWDQqxcDhUJEQQFPAcKf3FOrfr1NLVAEaKjVUpjuSO7oVXxnLy8DtWcP/ysCIpqPGAoQWxWVJ/jP2hzA2qAglaigu9xX2XdqktByhpEKDKUQIQqUxGik7VldTWP5tQqfwmv3W9pXub+/A9vJza1BLrQ3UjQtYxkYOMAAHvYMbWqvq60W66or2+cVa54Anz9c2tYAUrdC+3Z2HT4mEiNfjYZS5QLjI5uTSAFOx6G67EzpnDnf+WSdv9CSJZaFh/t5zlvwGvr1GACWloBiAYoBGB4w6O/j5/Ssh1/sPOyUl3fzD1F5ggVtCiB5z4vR4X69E+a8jfAXxkAm6wSRat44zwOc/gGOH95fvGlTao8f8wpaArDoxZcH9Vm54l10cXgRNgoGkDQ7Py0ATZqrSNzwVe3R4zvbZWffegJ8/nBpmwN4bsgrA/suXRyPXt2HQiGX/YdCaABaTSm2b91WvG/XDt/Dp8st7Ubs1Ut6qW/gy71XrIyHk2IgZAQ8GQQBoGgTKI0m/+G8hesdLxUdoPLynikXpi+Onfhin1Wr34Oz3SBeJgHBjec4sAwNaOoKahcv3cieOrXPPj+/1hKAVeoAZ0NQzEiPf3wYC1u2n8BKQYkURI6wFEQ8qMm4PfGttS5cQzqVlcX9oVk9wYI2tcCqgABlU9jgV7wXLZoNG0WoUWbeMMCLYAnx1tbm3JwyI9HtXuUhKj9fZ2lf5epg344Tpk1SjB03Dgq4GygGDE2DJYLIBD2uFR8qfys20etMdvYTYPNYS9sUwNsREa42oya8bj/573+HTNKTkzaLQCn5V2804uatoxVTZyd5wHDUkuUQqXM9PDzE+7OVM9DXfxhkrB1PE9xoyIn4MZru4eiRPbeXfba5a27uhcdC5QkWtSmAN8LCAtwWfjQV4eoRkErbcSwBUIAUPKBprMXJggO3P16W6tLF8cxv9eFv9yeq1WyZRBLj9cXWeLR3ioaMYUDRMIgUZKIIGJqKqzdu2iYc3LejS+aJG0+AzWMtbVMAK6KiotzXJyXA0+slMFKJyBDdZoCcWGCD/nrd9t3fcDv3bXfOzSi1xMCin59Nte9zr3ZMS51pUMpDZWbNTeyYIocp0KQ9c+mj+Zvszp/Z55578eFjofIEi9oMQHH0aKasvn6I185t78LRIcosOyjACD2khD41+sJby1Zvlh4/vrfTiRP3LO1JGx7emfPvP9ru80/e5pQKP5YzAJQAEBIymEQ8rMm+EDdrnU3jLz/6/HTN8ATYPNbSNgPwfmiorSIw6G82nyyaYZRLgyWsApQgArwB4Higti6vaHZCcsfrDT90Kjqs/b3dkPPvWmRor27j35qEcRPGwkbmBtEIUCJE0KD0OgMKL/xcvHB+Yo/ME1nWiLPbDMCq0FC3zq+NHocZb08yKGQ9WUoCxux9AqDVmlBRcfTq3PeTe9beP0IVFJgsAEhfGKQOef6996cjYtAwKCV2oDjwIMslYLSN95B++NsbK9emeeTnFz6WST3hojYD8Ep4eL+ec9+fguiIkZyNqj0FuhlAUQDq6mpx8sz3l5Yt39y7Y7tTLRHIRZU8ps+yVXHw6B4NBcs2A8iDJhbYqPkFKZu23vlh7zdd8gqeagj3K85tAiBxvXNRUZH9EtfGwdtzCC9XSokCpHiAJqFXfV0Ztn+zo2z37u1eubkWCeRujJ/Nww6+r/quTpwFlVMI5OQcJQTCQxQEUFrtqbvvvr9Bdv78d04FBfVPaFyPtbxtAAwIkBR5uQzxS0pKgKODWpAqKIjNUYiZQTUNhfcWf7xZPH26RQK5p+7fSQgOH9Nx3oK3oXLy4yU0KLP1CRBNOoHSGI+VvvnWWp/qqnRLx8BjodTCojYBsDYgwL4+OvQ1j/kfTIetIkhg5KAoEn6RN+VE1DzIK5kxM9m+/trBToeLLBLI3dD+vTq8/ffJ9OhxY6GwczUxNGhRAENMWa/VoeLmoZJp7yX2OJ6R82eBsvT9NgHwjlrtYTNuxHjbN1+fCFbWAxIlSPBm9j7RZEDplaNXEuYk93pQl2GRQEaPZirvVoZ1/XTpdPQPGgqZytZAASwBUCQpLG21kH5kT9XqTZtdczKKnhkAyfl3MzKyX9d5s2LpQeoRoCXOoBUQRdZ8BkLU1eB07neli/652edY7hlL0kPs1k12zbXji902pc6Gh2ekKFEwRORJiYDhjIChsaQm7autpl0Hv+l8MqviWQKQLokcHNl9w/I4+Hi9BIqRihwDipWTsx8wasoa/v31joYt2752zT5VamnjYmiobaVLp7913bhhBlS2wZxEbv46r9dBSdNAU11ByYdLNnU+W7rP7nRGzbMDYLchsko/+6Fd01bHwdFuIMBSIKUkWkoyAIC+7vyNFZ+nyTNz9rQUgdwPDe0iDeo/xm7J4rdgq+pjAAUKDKQEKb0OqK3OKUpISPS7X3+QysrSPzMA1oWFOfL+ASOc/rVkGm8jD2RoBqQwB5EGjBzQUHOiYObUFLf7pd93yLrSaElA3woJ6eU6eeIkjJ8wRrRRuhkggAVt/oOmwYjiy+kX53+Q2CcjK9MaEUib6cDqsDCvDsOHT8DU2Dc5hcyHoYj0ICASyzGYUFZy9Gzc9KTAev3RFiMQdWjI80vMBDKMVyrtRHMCgQcrSoD6+gc4+vPeGxtSUj0yc85Zy/rIc1uVhc25u8iwft7vzotFdNQIXqlyJtrP/BJEwmi1tTiWeaB0zfJNPsdyT1vMwKjVbKFCOrjvupR4uLpHc3IJS4EDQx5CjgOtvgTrE7fVpR/Z4ZhlPQJpEwCLYqIi/Vatmg1v3yE8qYEQAM0FYgCNDWXYkLqj4adD2+yzsq5Zspy7fn42DwP6vur72fKZcHQKNbIMWJqkUEVAkJBc4pn7c97bKC0u3u+Qm/vUU1i/fa9WtcDLvXpJpf49hnRbsToOTi6RnExCTn7QZgBJDrDhwsP5C9KkhYV7VKdOVVsC8H54QGcqeujodrPfexu2dn6ChETSpB4qAKJEQNWDY+VT30n0LC//mbpyxVwotdanVQEkBKIN7ju8ywcfTYPSsT/PsmbTM7uxYCKHf37lO1NS5HeufG+pAE6OgeoY9XN2o16fpBg7YSxkMldRJgFFKJwkIng04WrJofJ3303yyrBeBNImJHJH/YKHbNykCY4T3pwIVtkdEspMvuYQjteZUFKSUZYQl+RVq20xhVUaERHms3zZDPg9PxQyma1IdB9BlmSgjfq7wo+H9lRtTElzzcixWgTSJgBWhL/Qz33h0qkYGDUCNO1sVi+kjk4sR6epxenTByqWLtrkcexkiwRSylIv+qSmxsPdPQo0w5DkqfksNZIYuL5Y8+WXWxt/2P+NNWog/30UtJoLmxk4KiLSe2NaPNw8XwLLSpt9l+QPOOK+5U0H9m2v3frlNtesfIsEIgYEKCu83F/xSNs8G7Z2oc2dR6xZxDB6I+lCOFO2ZPFGtvDCfncrE0irsjDpHqjwdh/qsXVHPFS2arDmyi8oAqDJRIo/52989nmaPKflCEQTEtJBCO4/ym7Jkim8UuFPhDixQIEkZHUGETW1WefjZq7zLy7+ydoE0qoAEgKB/3Mj7D/5fBpsHQLJ2WduBBQ5MOYIpDGvcNbMlC6//PJ9p6LfT2GR5ZVhYd1dJr0+CRPeHG+UyzwkFAGQggAKrE6vx9VrPxbOnZvY99iR7NZoi2s1F66IGODpPnLsG/j7229CZe9D9C6xQJokQHU6Iyqqjp6bHZfUj7dcRCcAXo4MC+q15KMZCAz6G6e0tScbIPZnduEmXTUOZewpX5W82euU9VJYbaIDr0WGBXjPmTcVEQNHiLb27bhH9VviyFSTvgZHj39Xsm51avfMTJLC+t2GSnKOXnpl8ODea9ckwMUtxiizYSizA5uLKWAam65iXepXtYeP7myXffipdmFZ0pGtZoEXYmKi/JYti4dvj5d4uULaHLuSBIAINGqvI3Xb17cOHdjulpl53dLLisHBiivdXIb1Wrt6Nuycw42sgjCQOZJmSDKrvuFkw/x/rbcrLD5AnfqpwVriudUtkEQg1PPPD+25bl08lEo1b2MDTjRBSlGgeD2gM5yr//DTzU15hd92Kch6YDGECwnpwMZEjGqXkDAFSnt/kgNsjj6MYCmeR/XDjLLJ09d56RsPP+0urDa1wBthYY5cYOBwr4UfT4NK0Z+0sQngIDHHrkYRdZrcm1NnJ0nKyw91KShosvSyVWq1b7s3RkyWvj5+HKR2bryEPIFYMQ8Ym7S4XvHDzfgFye5HfsprDetrNRa+85LaQzFk9AT7iZMmQqXozrOkaiuAIl0IAq9H+Y30q7EzU3p26JBpsQZsLgWEh7gt/mAmgl4YBkZlK0oIdCSFRXRkfRVyT+2+uXLNF+7Hjl1+pgCsiArv5z53sZlAoGCdORrN0pfULkym+8jL3Xvjn59tds/JKbRIIKNHM9cba2K81ycnwMV1EBglTUI4ThQgIXG0TnulNu2LLboDP+7qmpVV+cwASBItV9UvRPVM+ToO3t1e5FlRKjLUIwBNJIla2rBl6zbdt9/u6JSdbbGN91ZwsMLk0fEVz/XJs2HrEAbaBhzJ5BAWNumBxqaTVz9auL7j2cID7U6dahUCaRUXFtUe8nL7nsM8U3fEwdEx3ECSBwypnnGPIhBDwfUln6R2uJiz1y7jtMXiz53wvu1VoaEjVQtIG69jX5GSmYtILNmFronHw/qMgtmzEgNqa596G29L1mx1GdMwwLedJCh8hPyfa6bCzibADKC5/EiGOEwCGppyzsbFJwfeKGuxjfdWRJBP14ljJ2LcGxNEpYMnoSDyHJZIwMZGDa5e/eHMRwtTBhw+fKK13LdVLPBuxADPjq++NgGx7000KmU+pIYkgm9mYL1Jj4rKw2fjE5IDjU3HWpIexVHBA7rPmTMdkdGv8Qo7ByMoM4RmABs0lTiauevahqQtPhkZV54pAEsjgvt2+8cHsVAPHckp6fYMyNZFcAIL1mC8h8M/7y9LSUzzOpJ1zmIRHaAvDBk86Pk16+LRxS0GtjYsT/pfmvsZgIamy1i37suanw7tds7Pv/1MAVg0ZPDAPks/i8dzAUM5OWQsDIDIQ6SUoLS6Umz94ut7O3fv6JibW2ZR/wUEKOt8fV/puWL1LDg4hUFB4hcOosiDJlkJTdNJ7bz5622KCg9QrUggVndh0gD+S0fHl3xXJSWgXZcoTk5RBECeN4JhbIAGXUH94g9S6RMn99qdtkwg1dHRHQ2B/Ua5vj//Hajs/In+o0gjDZFBIs2hpjajdPLkJJ8HDw5bqwurTSKRmqAgO90LAa+5fLRkOlSOL3AyFgxMEAVSQZOKqNXklMfGJnvevX3Q0hwISSDciIjw7Txp3ETp6NfHQW7rbqIoSEglSiDjYEI9ysq/vzhl+ga/E8fzW9N9rW6BVaEBbu3Gjh8nnTR5MpT2vqT8SINrDr0MvB637hwufWdqsg/FWyQQoiNL1OqQ7p8unoZ+/sMgtbMnHYCMwJmPAhi5mzh2fFfFqhVbPLOyfnmmAKxUh/i7zJs/BeqIUZCpOhjICMd/5kA093Dq/L6bH3+S5pZ7jBDI76ewAgIkV52dY3qmJcfB2TkKcgeW6D+GMzX3U+v0l2rT0r7UpqfvdjtypOqZAvDO4MiBnRLXxcPLcwikSrnhUepTQSynXlPStHP315pdu1qMQEgR3dj7+VdcN6yaJSrloQJra8aIEjjQRiOg0Z4sWbRovXNh60Ygv/5QVhPSYkCApLx9+yGe27+Kh5NDpEhJKHLykUSqkpQfNfUFd1auSlWdPLPXLsNy+5kmJKaDYUDv0e2WfviOqLLx50grMPUoGWEw8Kity7g0c2ZS75s3rdbG2yaRyEO12kHSp89rNp8umW5SKAbQrILEHuBFAUrOJKLmXs752bOSnW/fP+jawiBhZVh0d5c3x03EGyMn8Eobj2blR5SkANag0+DCxR8uLfgwpXdmZn5r1ED+G0yrWWBVSJR75+FDxmNm7CSjXNaDpsxtMObwi2nS6lFWcuTS+3OTe+uEzJYGCa+pBwV1mzd3OqJDX+VlcgfSwMab4RMhbWq8hSNHdpWuTtzSPTv7amuff1Zl4ctqtX+vuXNjERk+klOqOpjHGJo7AYGamvs4nbe/ZNmytO7HT5BJ9N+9qYOMg13Ragf3WrEyDp7ug0WF3NwLQnKA5mqwtuEiUjZ9+eDg3t3tcwruPFMAnh48ZGD/xOVx8PYYykmUcjOAZISN7LKurhQ7tmy/tWvHDrcTBRZrIGSeuKZnz2G916yZDZVNmCgnNRBSwAQEkQOtbcy/9957KfSVa9+3f8qT6I/7Y1jFhUkEctql40sD1q5NgIMqimNllAiJOfVkbiTX1J1rXLQgVbx4Zq9dVoHFGsid8PD2prCQUa7/mDcFCtu+opS0kBMVSBIRRh5abUbZ5InrvBr1rVYDaZUz8PqgAHvjgMHDfefPmw65dAAZwRcpafMoFznAHtzNuz09NsnlVtVBqoUayO3Q0B7O70ycKB0zZjxkKg+BJjdxkPhXBJqMDSgv++GXmTPX98zObtUU1m9BtIoFVkWFuCvHTx5vP37sJDBUD0gIA7PNyU8TDCi5fKQibnqyh8hktEAg9PXI8GDvpYunIbD/K5Co7DmayBcetFlAczeRfmRXRdLnWzyz8ls9ArGqDixXq/3d5s+NpdVRo8Cw7cFIYBIBCXFfk+kBTuZ8V7lk4eauOflnLRKIWs2WUFRM983JcfDwHASmeQ6ExNIsLwCN4sW6L9O+4Pb/+9/tc3LahECswsIk+C+Ojlb3WJ8SB2+fIaBomYEHWAnAEBSbtNeNO7/Zfm/bV9td81vuwrrt3XuYy+bE2bytMoyjmpuRTMYG2FISoMF08tpHi1Icis4eaCsCsQ6A5jkQ1dCuaSmkBjKQA0sRj5OSw8JoInfBnL+7YtlmKjv325bmQBoC1M5U6AujVEsXxfJ2ir7Nd5WQGrAJjNHEo1qTWTQ7Icmv9FJ6a3RhtVo6qz442Int12eE8rPFUwVbVaAIu+Y2QOJ2Rp0ATUPeuVnxKS71xRYHCcnL3lKru3Ud88abGD/2DajkXiIlgKLNzYRAo0aDqzcPFS1YuN4vIz3PmnMgfyRnnjqJ1A2I8LQfOXg8Zk6eKNoou/NQNdMHucpJ36TDjZtH8uPj1wdXVR9ryXIuRQ/s/9wHi6cjMPA1KBWOzQKSXEVEbvTQVCI9a/e19Ru3+LRiEf33wHzqAJZGRPTtNiduCgYFj4RS1UGA3Dw/BGKBuqZ7yD6+//zqdV/4Ozmda6kLIffl6OiwxA0J6NQ1BlKpBCxpHyIBiwFME6mBpH5Zc/TobufMzFatgVhdB54bPHhg39Ur4+DdZSgUNnJyhxWER92UTY0lxi82f3330KFv3DIyyi0F/+VqtfyBV9eXA1esiYPCPoIwEC9pnkVkSDeWtuHU/fj3N7BWnET/I9e1iow5GxAgkfTsPcRvxfI4ONhGQiqnQFEkh9qcLm3QnX2wYP4m6cXiffb56RbvwiIRCB0ZM6JDQkIsZMp+kNDgHgEohcBTd+8evz5lRrJ3Y/1P1hwkfBwQn6oLky4sY1jE8G7zP5gKpbS/SBPtYr7GgIDIo0F7/Nbb05Jc6yp/trRxksKvCo30cX7rjQnSUWPGg5V6Qy4F6achH1bgNLh8Nb0sfs5Gr+rbOW3JwE9Vxph7YIKCvF2nTxmnGjN6AijRh5fbNDeAG42Q0qwW168fKpkZn9I9Iz23hS5U+peBIUG+y5bH4rker0Jh4wSGhV7kIKdoQGuqxLHsvVXLP9/WhWGKWqsP0OoyhiQQblPccy4J745CRGgMWDKJ/quBUwI44T5OnPyx6pOVe1zyjhVbeiFzFS4qIth9zfLJ8PCMAE0ulGHMI2HmdHaD4bqwY+f+uj0HDjqdya5siySqVWJhkrurv1Phbh/zciDs7XtALidXYIkwGEQoFDwE4YH+/Pkiw4nLFx0utjwAqFcHd5MNHxkMmaobBIGGTEaDN1EQRQEiU1Xz85Gz7eouX6EszBM/ztn1tNY8tTPQfOOun5+yxtnGQW/kbWieXF4FSGXkJkmBZ2haB52uwcnNTWtJvvy6KdIL/YBlHfQMY2PkGNpeqaQf1t+jbWQyUc5LtSKnqXM6daqxLQW0VViYPPTR1cX//cOQia7/11XG/3ne6NEU9uwxt+P/f5/1tKzOKi5sjZf7X3jmU3Ph/4XNWuMd/wLwT6L6f36clue40kcjAAAAAElFTkSuQmCC",
        blocks: [
          "---" + "✨ Made by LilyMakesThings",
          "---" + "Changed a little bit by Fath11",
          "---" + "📝 Description",
          {
            opcode: "descriptionProjectName",
            blockType: Scratch.BlockType.HAT,
            text: this.formatMessage('CmntExt.descriptionProjectName'),
            isEdgeActivated: false,
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Whats the name of this project?",
              },
            },
          },
          {
            opcode: "descriptionDescription",
            blockType: Scratch.BlockType.COMMAND,
            text: this.formatMessage('CmntExt.descriptionDescription'),
            isEdgeActivated: false,
            arguments: {
              DESCRIPTION: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Whats this project about?",
              },
            },
          },
          {
            opcode: "descriptionCredit",
            blockType: Scratch.BlockType.COMMAND,
            text: this.formatMessage('CmntExt.descriptionCredit'),
            isEdgeActivated: false,
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Who do you want to thank?",
              },
            },
          },
          "---" + "🎩 Hats",
          {
            opcode: "commentHat",
            blockType: Scratch.BlockType.HAT,
            text: this.formatMessage('CmntExt.commentHat'),
            isEdgeActivated: false,
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          "---" + "📚 Stacks",
          {
            opcode: "commentCommand",
            blockType: Scratch.BlockType.COMMAND,
            text: this.formatMessage('CmntExt.commentCommand'),
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          {
            opcode: "commentCap",
            blockType: Scratch.BlockType.COMMAND,
            text: this.formatMessage('CmntExt.commentCap'),
            isTerminal: true,
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          "---" + "📲 Reporters",
          {
            opcode: "commentReporter",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('CmntExt.commentReporter'),
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "commentReporter2",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('CmntExt.commentReporter2'),
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "",
              },
            },
          },
          {
            opcode: "commentReporter3",
            blockType: Scratch.BlockType.REPORTER,
            text: this.formatMessage('CmntExt.commentReporter3'),
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
            },
          },
          "---" + "🫳 Booleans",
          {
            opcode: "commentBoolean",
            blockType: Scratch.BlockType.BOOLEAN,
            text: this.formatMessage('CmntExt.commentBoolean'),
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "commentBoolean2",
            blockType: Scratch.BlockType.BOOLEAN,
            text: this.formatMessage('CmntExt.commentBoolean2'),
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          {
            opcode: "commentBoolean3",
            blockType: Scratch.BlockType.BOOLEAN,
            text: this.formatMessage('CmntExt.commentBoolean3'),
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
          "---" + "📂 C blocks",
        {
          opcode: 'commentConditional',
          blockType: Scratch.BlockType.CONDITIONAL,
          branchCount: 1,
          isTerminal: false,
          blockAllThreads: true,
          text: this.formatMessage('CmntExt.commentConditional'),
          arguments: {
            COMMENT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "comment",
            },
          },
          func: 'commentConditional',
        },
          {
            opcode: "commentLoop",
            blockType: Scratch.BlockType.LOOP,
            text: this.formatMessage('CmntExt.commentLoop'),
            isTerminal: true,
            arguments: {
              COMMENT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "comment",
              },
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
              },
            },
          },
        ],
      };
    }
  
    commentHat() {
      //no-op
    }
  
    commentCommand() {
      //no-op
    }
  
    commentReporter(args) {
      return args.INPUT;
    }
  
    commentReporter2(args) {
      return args.INPUT;
    }
  
    commentReporter3(args) {
      return args.INPUT;
    }
  
    commentBoolean(args) {
      return args.INPUT || false;
    }
  
    commentBoolean2(args) {
      return args.INPUT || false;
    }
  
    commentBoolean3(args) {
      return false;
    }
  
    commentConditional(_, util) {
      util.startBranch(1, false);
    }
  
    commentLoop(_, util) {
      util.startBranch(1, false);
    }
  }
  
  window.tempExt = {
    Extension: CommentBlocks,
    info: {
      name: 'CmntExt.extensionName',
      description: 'CmntExt.description',
      extensionId: 'commentblocks',
      iconURL: '/banners/CommentBlocks.png',
      insetIconURL: '/assets/lilyComment.png ',
      featured: true,
      disabled: false,
      collaborator: 'Lily@TW',
      collaboratorURL: 'https://scratch.mit.edu/users/lilymakesthings/',
      collaboratorList: [
              {
                  collaborator: 'Lily@TW',
                  collaboratorURL: 'https://scratch.mit.edu/users/lilymakesthings/'
              },
              {
                  collaborator: 'Fath11@Cocrea',
                  collaboratorURL: 'https://cocrea.world/@Fath11'
              },
          ]
    },
    l10n: {
      'zh-cn': {
        'CmntExt.extensionName': "评论区",
        'CmntExt.description': '注释你的脚本',
      },
      'en': {
        'CmntExt.extensionName': "Comment blocks",
        'CmntExt.description': 'Annotate your scripts',
      },
    },
  };