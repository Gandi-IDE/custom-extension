import Cast from '../utils/cast.js'
import Clone from '../utils/clone.js'

const Icon = "data:image/png;base64,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";

const home_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAGxhJREFUeF7tXAlYVGXbvs97zsywqJhY4i6JhpoLkpqSpmVq7lr4fbinSSoquOTW1+/0VS5lhitSCG6gjvu+pKaZWqaiZS6JRuaCgeYGDDNn+f/nPWfQyo0Bwr861zUXw8yZc973Ps++CfjnyBcCQr5+/c+P8cgCGDJvSnG7pD3m5VmymKo4r+0NG3rxUXxejxSA9W2zA1o+VatL7fJV2pUpXjLAx1yiFIPgeUO5dfOW03HudPqFg5tPJK84df3KjvPdRmQ/CoA+EgA2SPjAr2OdBgPb1Xt2VEXm4W25AxlmvNcAOAHcArD/2oW9Sd/snLi2Ve9NRQ1i0QKoaULY57au/2783MRnPcpV9wFgVpErV5xOFSYzA2ToH9JbBlwDcAq3sPvnH+as2Lvv/eQiZO8iA7BRUnSZsAZN/6dzQP3BHpBRDBJMRE6qBk1WYDFLnLgURYMo6svMys4Bs5gAxuAAcBPASWSmxm5dP2R5m7CNRUGNRQJg3y9Wd+7RqMXkp80+T/lAhSeIyASo0MDAdGLTNGiaBiYwKKoCQWTQXLSpyRBUDTkiw3WIuAJg3Y/JM5O++uL9Y92jLv+ZQP6pABLVdXumyfg21Z4Z5gcBXgA8oAKKDIgSSM6pxKeaClFzST9AJaoUNUAgcBUI9BYCNE2Fg0nIAnCD2Fq9nhL3+aahy1t23/JngfinAfivz5Z26vnci+8He5SuVQLg7CrJCiA7wcxmXb6pGsBEKIbCsGv0DvAURIiGGCTGFgl0jeAWoDrp9xbcgoosMBD5rTx7YFri7h2TU/qNTy9sIAsdwKD4iY/3b9pufIeAOlG+pCQ0QNRkMEYUpnLNoMoaBEkHziXbLkPBBeeNw9n2bLuvh0eAv8nnCV/oQNIv6S8HUlGBnBxoXp7IAcMtaHBCQAqyjs9au3KErXPvrYUJYuEBaLWysKY12vUPeWnS05bHapUiqnOogMgAQYXDmQ2zxQJourLIJPAEnRV3XTy93rb3s/BN3SLSXJt/e+/mvh2efX52ZebpZaZrKRq8SbnIpKKJnElG6mx/3e4APMxcW9vOJH+09PCXU5K7DSsUaiwUAGvOtvoNbNF2TPsaDaKe4HJOpxgScqrqBBP5f5DtTkiiBZCAqwLwvZZ9Jf6bz4fNb9Qu6W5U81zinMf6NW85v025ah0fo+sSF/OXAhUqZJKdkoV/RBvLUlSoIsN3t64em7d365vz2xS8bCxYAK1W1rtZnQ59Wrz0bh0Uq12SCEMFVIeDExqTJM60pE1Frg50E4+obtvPKWvmH9z6+o6uQ0ip3vcYuXtDn+5NWs6qLFmKedM9iPZUjawbDp7T4YBZIimrP6ibDLgAYE3KNx/Zkr8qUGosMAAbLpjl26lBw7c71WgQSVTnBY2bJ4KmQhAEvjEZGteyXIPm2nGOzMX7tw+IbdJuyYOAu/P7JqtinujXrHVcC1//DqUNKifW1llaAIi9icO5eSRwL4bsxkO3Lh9dtm/niEWtu+/My/3udW6BANhtW2LbHs3aTKxjKVWXsxYpC86yCgRBQ3aOAyaLF6c2MjmI8sgl25d2ZuPMzzf0/zoftlvU/k09Qp9tOv1JFPMtTg9OcXkyZBox46EJMOG28U2CdWXKN5PXJ++cfKjb2Ov5ATJfANaKs5YaGNJ2XPvABqN0m84wTzQVJrqypkAjDWsy54L3K4AU2DNXfr1zaMyz7RLys3jXbxvb4kr1aBqyoI1fYHtO/U4VoqGsZEWGIJGiIgBVyGCcGklpnUf2yY/XL41Y3rGf29ToNoBhW5M6hLdq/24ginOqowsRY5IudCkMTabFmyELwFXor70ZqZtse7a8tq3roF8KArw7rzFoz7rw8Ofaf1gBQgktMwu+nl5gfIcKNIFYmXHqJ/FB1o+d6WtaemrfFNuhL6Z812McPd88HXkGMDhpaunewc3Hta8ePIJME6I8MoZFiZiEpA0pDScYoWYxQxN15/8stKz4/ZuGzWnSfl6eVpjHkxvYZvv1bPL8p13L12rPZaOBmGLPhuhh4WytChqXjXaoyNZUyIKEU/L1U7EbV0XaOvfLk9348ABaraxDSGCHgS+0fSeIFa/rrWgowZ18FZqqQmAMOXY7LBYOKSdJkncE3rbU77fGfbE9fG+fqHN5xMPt0yP3rO8d1qjZRzVMJUqTXJS4SKGXbos6FCcY19RAjiGbSRiu+vG7aQl7Nkw82Wf8A60BY5sPXmNQ/IzHezdtNrZdQN0RFHKi25L5YOJGicK1KhQGOFVAkjjLXhOB08i+tXDf9qFzQzrOf/BdCv6MkCUzy/Vv0Sa2WZmA9uWJGslxUWSIEuNOkNOeDZO3J7IVBUw0cTlNntCR61dTYw/tHLzsxdDND1rV/SnQamXdGldv1//5l9+rbylZhwxXkilcxqkOWBiDSg69PQceHsWhkSehabgpCPjmZtqWGeuWD9jVc9j5By2isL+P+GpDeJ9GLT72h5cXmVbEI4LDwb0XTpFMgCpInBCEHMBuAX4EsOT019HLDn75/g/dR2Xk2YwhWdej/vOjQ5965k1vFSipm1XIolAIZHjRf7nOPwPF18nOOgunfcnBzyNmN2gdX9jA5OX6IbboSr1ebBvTtlS1tqT0LJrBQaouJBWSjRqDSSVXE7jOdFPruOP6z/N2bHh9Wdue2+52v7tS4Iub4msOatRyQbNSFZ8hb8JEtK1RAESFkyLEUGFSZQhMggMUk9PNgu1pJ7fM37W9/6OaACIAhu1a81rP51+aVhleJS1Q4ENRHU2Dg+n+kYm0HmHKAAfT90XmwvzkXaMm12/x0e9B/AOALZfOrmEN7bPxKebtT4aphcSc6yXpF3U6s+EtWaAKAq5AwFmomQsObIuIafTygrxQRVGdS15MWP2QhA6Va7ctQ7SRnQmTp6fuYsoU8NZhUckNlXQQiRoTT34zfkyNhpPuXPdvAKy+fmrpaS377mzs4VublASRueagaLDIyZqYN1NQIDARTmjIhoBtl85sif1yXY/93UaQSfX/6ui9LemNwS+0nVZV9OERHkpm0V+BKNBARiYUJQa7BpwXVMw6smvA7KAX41wb/Q2AE88entHLP2go2Xd0IR7EvANEUrIOs258nkN2zrx9WwYlhHQtEG+iqJBvbJtWKvzlzkkhxfxbEzWaFcCiewWQyUQTyDXgASNulv0EyFELZ9fa0WfID78xYzqvnh/8Xuc+B8n4LKZo8BBJIhiHBigCQGY6kfL2X1K2fLw7MfR4Nyv9+5c4Ruzd3LN7k5azK0MqQZqaJD29KPxBMswsixAkge9/yYlvF7xRs27f3wAYffTA1O51Gozk9h1pKGJZ8ncoA0ZaCcAPsN9cfHjP4NjgVov/Eqj9bhPBtlifQU2aJbYsH9iO5D/59hSAE3mORtJjbybgjACEJUVX/abH8LO5LPzFzV+/r1+sZE1XFI3C5ZSS0Bjjwc6vb6Xvjd21uvP6Dm/c0yb6q4A6cvfayP7NWkeXhwUSnIbJZuSnRYZfRCBi94puK5qHLucA1ln4obet16iMqoDHrRw7ilk8wAwzhSIXP2g51/ounVXt0H0Myr8KeK59TE/+/L3u9Zq/RTlrnnZ1yjCbPJCV5cANLzM+OL57fHSt5pM4gIELZvlu6h2RUZG0j0vwqU6AmbiBvOLUkaR+gUE9/mog3W8/obaY8u+GvpZSARYPQbbDIpFa1XMuFE9cmHY8ZnzZWoM5gMErY8uu7xp+0Y9yFtxcoZCUwo3km2CYvm/bsPdCWs/8OwEIq5XtmzDqx1rwrlScKxL9EMBA2alFl08sGelXszsHsLEtpvyq0IHn/SiBzShXoUGCAjsYroEhet/W9lNC2hRJ6URRPrRdWtbZevD0p+oJV6IKGsMVAVh86eSSqHI1dAAbrZxRYU3XoT/fA0Bt5v7PXprYpNWOotxMUdx7l5aVWg+ele8BYFJUuRo9OIAN1syuuK7T4HN3AVAjCvwHwLtS4EMDSBTY6h8KNLy72yx8G8BgW2ylDaHhP92DArUZ+7d1mtSk9YaiYKOivOcuLeunevCsdDcWTrx8MjHSr0ZPzsJNVs6qvLJrROpdAFSJhWfs2zpwUkibT4tyM0Vx7/sBuPjyicVRfjV7PRSA0/dvGzS5SetPimITRXnPAgMwev9ng6c0aRVblJspinvfD8BFaacWDS8b2JtT4LOrY6qs7jzwx3ux8N8YwHubMWknF0aVrdHnoQD8G7NwgQCoTd+/bXBhy8CgtTPLlfIuUVmCWXIqOYKmMIFXDvKyDBmKpmqKpmmiICnZjqyr+zu8cbKw2fp+hvSitJMLhpet0fdhKLDQAHwhcUbDPk1adn/ar0LnJzyKl6fgOcUzXG47eaBGcDi3JMOVH7+hKdkXM6/t23X2+NKJdZvlhtgLEtSCAFAhM6agKZAaawZ0enVKs8f8e1PZL6UZKc6hKODlvmazkYChSLgC8HpM4yOB/lJG1QixU/nAT1B+XrRj9eh5LUOXFgmADW0z/deGDjl7FyVS4AC2iI9uNOm1yOWVgIoU/aaoLyg3q6p6USR57fwzIwLCa6n1g6JEikKFQoQ4g0AtEEbREuUrVqYcmTSmWtD4AgHRamW7Joz+8V6G9OK0k/OjytZ47UEsXKAAtl0R2+jDV8K3+gA+lG/2poQVX4EOFgFEZVOMQORkp4NHtTd0CEas0oUxhZYozE6p3F8FGP0ix+aMerJ2RL5B1AEkJVLxrsGEvAA4Y9/WQfn1RBp9+n6Zua+/eaAsTJWKGZQnqFSYpNeq8PoUQYBFMANOGSBelXgdPu9oMJqVdEB5UYQMUjNajgJmEXMLhIgS5365Neq9pm2m5wvERw3AWacOzOpUvX5EKYg8/8p49SoVJQGZ2bcgFCvBq0lNoGpSnZMph+MKZaqaBlVW4GGiGha9dFhvd2CQnU4IJhGKwJClqjjPlMyo1Z/U39FVTz26degAki9cocgpMGTFrFpxr0Qco5QpZbt4+S/lXAgCquqSgIsCZWF1cFwAEkB3gni7P0S/jkh9dFQYpOitYFQpQdVVlLdOvPjdp2PK1wl3Czz6UUECmF8tHHV0hzWyzgsTHudSTYMHr4PSs35UV3hNAI4j69qe40fir16/kSGByaU8iqn2nGzNriiaauJ9coJDdgjFRJMpqHLA8438qrQhEJlThifZikTMet8OLkHDeQjZvRJn+qX0HEZNAHk/8gLgfaIxBaJEkhzpXzczlW5IAFKlg14/rcIpMJ6s3/Prhc3/3bCk77e933y4sl+rlfUNqvbK2I7dbRWMWkVCSJZVSCLDTUFva3hn+9L2S19ys4vzUQLwS03TagIgzatrAQ2CqiBLlHAKwIBP3nn80BvWPOeb30n+YuKQek3H+SgKRFGE4pQhihIvgKKeufhj+96x1g6x5p388sjCD6LA6P2fRbgbjWmeYPWY2XdCtj9RisFisqpAhIYbTMKqy2dX9/Or2tWdTbZbFfd0TJf+35XndVUCp25SStmyAruHiMWnj8QMqx402J1r50kGFiaAjW3TPBeFDs8qqwFeVC7GvQgFEqPSOIZPUpNjxvvXd2uTQbYZj68NHfoLAUhVVGYmAg6NF0RnMWDR8eS5A2vVH1ToABohfYpIC79La1JEWssPBTaeNs0zafjwrHJG5RMZvUSIZBNTfjX25yP/ebtS0PvubLJ60tTSW8NGplc0zB7u8ZHaNoojE48lx/arXX+gO9fOEwUaWTnKidwNQOQnHhgca/VaGT4h088o1qQ+aoOTQUJv7k/f9fifKnXu2lz4oI0Hrprlu7FLREZlo/uJt8ASgESIlLs9njy3/59BgYUJYKuFH3rH9hp1iwCkInUqk6ODbDoKBMSnHh00xr/e3AeBdbfvG66a5WvrEpFBmlhvzdabGwWmty4sPn5o7oBazxQ+C98nsc6TSvmhQBqgs6Df6BsEIFXHuzwLApBMmIQzR2eOCqg3zB0AqTjSFjr8CrUwUBEUL4SkZnYGXtOz5MShmDdqPuOWfM0TC9+ntIMS6xQPdDupFBw72Wdp+JhrZAOSD+yKrRAhksew4EzyrBEB9Ye6C+DK0OFXSEERy7rKL+gv+cTLTh2aMyjwGfcCCw+2AxOiytbol1tctIGKi/5YG8MrE6bv3zbQ3Yj0c3MmPRY3aOxVagLk7tft8mMO4PyzR2aPrBo0xB0AqcV2be+IDCqKouYeVx8cUTkVhi/74dCcoU/lC8Bz9eBZ/h6+8G0Aqb9sXejgS4UBYMMFE33n9x6XQRRIwyb0NlgdLircjD97ZM6bVYPcohICcF3viIwyCqCILr9Z78gkAG0pB2dHVmvg1sMJtdnEiND2FEy4K4CJaSfiI8vW7K/XxrgANOoDaV4L9fnmgGlU2hu9/7NBk9xMawbHTi29KHxkOslAokB9QoKuh0kLz0v9Nmasf1235BQpkbVdIjL8FBWaqAdXKSThLAAAm1ut0oQJY1PrwFKe2tuozFd/8AxXGdUHnogf7gKQ5rmsDotMK0uSmGr8XTMNqOft/0Lu0/ftHPxeyIsx7rAZTe1IfG3cL5WMACoNnFA0GZog4ipExJ37du5bleu6pSnJjNnUZVCGP22OpKug97pRXaMdQNKJg7Mja7pHgc0/t0qjm49KrQ3v8iR+zDJNB1EBk4TrZiD2/LF5YyrWfl0vb0uKLrMmLDLNj2qiiToEalsVYWcC15TRX+6I+KBpyznuANhk4YdPxPcadZkA9HQoAFOhGYHSdDDE5wNAlyFdhdZMG6TpRgLjJgxp4cRTh+cMDQx2SzwQBb494e3U6mDlKW/jSfZljgyYJfxqAuIufh83uvzTA3QA10aXWd4xMq0idTNSlFxzwiyIfJAN2WrRB7YP/bjRS7PcAZAi0QteH59WhQxpCr9T7M4s8jD9FZEhLvXbueP83aPA6kmxpbeGhadXoIJQRZ9sRNFq0shEgYuPJ8cMqeWem6iz8H9SnoJYmYIgnq5YGQMyBGDhpe/jRpYzACSfcmXoUM5megDTCRPE3D4425mjH0UF1BvlDoANZn/gt2jwm5fIlSuuj+zQpxQ5Fdwwi4g7e2zumKq13WJhAnAzB1Cf+kYHDUNymnQAl544EjO4pnvBhI5r5xUf06H7j4GChy+ZX2Y+LUlvukkXgIRL3306tlyd8Nwq/aReo8in9CQzQ4MDZm6xUTMh8H3Wje8/2ri17vJu3VwG/0NjSSnMeX3fvETRaOqA0qcX6HkOKpVNyAeAwUmxpZeFhadX4p2XBoDGAB/SwktPJccMC3SPAt/6YssrQ5q2XkGWg5fL/DeUSJoATD339YSPKj/739t9ImrW6TqCZwAthALj+mglCUxjnGQXnT78wcjqwWMeGjnjxEbR75dJiByfRm1U5InoI+54VlLvgjx7LHZs1dpuOfykRLaSK0d9zFQgTy9Rd+MoDL32+KGYQbXy7on8e3NClWGNO+wJ8vGtQPkbgbI1qgpVEyEyERcEYNyRLd0WBb2s94nQ8cmpb5e9Wr12N70TXXeMeCc6KONF1frA3rTU5D3nUhKuOjIPiLJywZ6TpUgWaknUD0mRNUnx0HIUWbOIkqA6TLcqeCiv9m3ZcYGvMa1NzxbpISeiwLh8AEgUuIZY2FgBB5C6SaGz8NGfU9fvPpPa9Up2tgjcKsGcMnNKkpDlBdAaac2CYPFQVa0U7dvHYilV069i88YBgZEBgqU4y7JD8jTSBXzZAgRBRApURKyKr7jrlQHncwHsv8XW5j+tQzcTpXhSHpYpubMQqDNTVSQ+r49CULQ4uiFRqSuy4irBoEW5JjLpQkCnPLOmwEJZONqhcVKGCHyaeix2vL97FEgALg8LT6dgreu+JGNyIEOCxDUx9bbRZzwTaLznCvUO/5nWTgl+aqghDiGZZ6Ef8Xy0E6CMHxiyOG8KOHAj/au2Pk805g/ART1VEqwe/+3cf1OnkhValOACWYUiZ/PcLI2k0xmblAyNSGQGeDTmRL9E7oVcY0WMC/MiAiigiVb8HBpAZlyTGlbifzoW81aV2m4Z0gTgyrDw9CcUJ8zcdlXh1GRIvH2fhu4IyDH4iADU5buuKHV70QhAGODxEVJG4ouPAiCNRGRtMuvNlgLj7qd13ZJWSzp1/+z3+0aztXFBMzr221fOKXs8bqIyC0pw83qB3CgKzbziz5KrE2OIAk8S3S7ByB00yUeCkeGsgKmU8DFKNzSSKkA6E/HJuaMzrZXdi8ZQh9Wq3oMyqvJHqsCZkw1PC9ES8TItk+5Dj5hBdDWN8+VTG6u+BYcmwyQYrf6cdWTemS+YdJ9J5xiKcAs8z7LkTHLsWwG3g7R3Eg4//197loe+9dyrtsft2fAzeZAPw6sAnAQCI8oTyM6GQI+EOrsJYK5WjTIMmjJJJhmXMCR45dvT2pxOfVIqk3g5Bg2GnvPTkQ8nVgka7eKEvPx9Mnayz8bwMdeeNOYScpYjyrHncI+Bj8Rjum3ICAiXbOEb0NfHKyDoyK1icvUKayDTklKvimTi7V1HM9N3j4lf2jpl2DCSAH/gPP0TmtTRrEaX/7QItVXmWVtdLuhzf1SjCdtQd3S+/oBchH9bJubafCqfgUqbkJgpd3yAXdIzZ9aDW8LmN3jZ7aqqw5rmDCCVlCOjGOWH6b6yQweQMKPJIq5lugDMfUrGAEfapavuRlV5WkUVyQ7WxRYp0P3XLmz82BbX7dAbVoqU5R5/oEDXNx02L27QM6TF5IbFy71ACoMPPTSEMY0zpUO2K5BM+p05mxNn01gUqmVxxZYYYKchNzR9l87JUSFa9CkfZ4HMicuX+7hjX7rW+e7hPSN7BD03lbwFUlbcJjCSLjlGkIHHCUnauCLWxv+5KNCciTviia4haRTsIJkXe2DLiITNX8+E1WpMe3wIAOmU4NhY09P+pZo1qhYY2bBKjRBfiKVcBqurdkrv6tblCVdcxtPmo+8MgU13dZVo0IOg90evZ5yK37Kmy+p/Dzhx5xN15/3UlCNTmlatO5qMdVdx5p1y+05LQbdvf3vQ92RZ0G9of9mAcvpG+rfH0s8nrjm8K+F+8yDuSYG/3wiFjkqaPcp6e3n5enp6mSSZyvpUQSXhokFUGGNOQWMqY0xSNebtEARBk5kmCYIsCoJMlUSKAsWpKJk58sXNbXvudQese/2m4cZPqlfw8Q0UnQ6zJDJNMnlomTlZmlk0Q9B4wRwVk9ACVUGQadySIguCAgWKp0lSRFFQHTmqmum0Z/wqZp/b1eI1wvSBx0MD+MAr/U1P+F8J0G4UcnSZxgAAAABJRU5ErkJggg=="

function find_distance_to(x1, y1, x2, y2) {
  return Math.hypot((x2 - x1), (y2 - y1)).toFixed(2)
}

function find_direction_to(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  let theta = Math.atan2(dy, dx);
  let direction = 90 - theta * (180 / Math.PI);
  return Math.round(direction);
}

function rotatePoint(px, py, cx, cy, theta) {
  // Translate point back to origin
  px -= cx;
  py -= cy;

  // Rotate point
  var newX = px * Math.cos(theta) - py * Math.sin(theta);
  var newY = px * Math.sin(theta) + py * Math.cos(theta);

  // Translate point back
  newX += cx;
  newY += cy;

  return [newX, newY];
}

function differenceBetweenDirections({ A, B }) {
  const a = Cast.toNumber(A)
  const b = Cast.toNumber(B)
  let dif = b - a
  dif -= Math.round(dif / 360) * 360
  if (dif === -180) dif = 180
  return dif
}


class ReMotion {
  constructor(runtime) {
    this.runtime = runtime

    this.spriteHomes = {};
    this.cloneHomes = {};
  }

  // cloneHomes contains targetId's which do not save, so dont serialize them
  // clones in general dont save anyways so theres no point if we did
  deserialize(data) {
    this.spriteHomes = data;
  }
  serialize() {
    return this.filterHomes("sprite", this.spriteHomes);
  }

  /**
   * filter out the homes to only contain existing targets
   * @param {string} type clone or sprite
   * @param {object} homes sprite or clone homes
   * @returns the homes with only the existing targets
   */
  filterHomes(type, homes) {
    const newHomes = {};
    for (const targetNameOrId in homes) {
      let canCopy = true;
      if (type === 'clone') {
        if (!this.runtime.getTargetById(targetNameOrId)) {
          canCopy = false;
        }
      } else {
        if (!this.runtime.getSpriteTargetByName(targetNameOrId)) {
          canCopy = false;
        }
      }
      if (canCopy) {
        newHomes[targetNameOrId] = homes[targetNameOrId];
      }
    }
    return newHomes;
  }

  getHomeState(util) {
    const target = util.target;
    if (target.isStage) return;
    const identifier = target.isOriginal ? target.getName() : target.id;
    const homeTable = target.isOriginal ? this.spriteHomes : this.cloneHomes;
    // dont do anything if theres no name in here
    if (!(identifier in homeTable)) {
      return;
    }
    const homeState = homeTable[identifier];
    if (!homeState) {
      return;
    }
    return homeState;
  }

  getInfo() {
    return {
      id: 'remotion',
      name: 'ReMotion',
      color1: '#4c97ff',
      color2: '#2a528a',
      color3: '#4280d7',
      blockIconURI: Icon,
      blocks: [
        "---" + "🛞 Rotation",
        {
          opcode: 'rotate_around',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Rotate around x: [X] y: [Y] by [STEPS] steps [ROTATE_DIRECTION]',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            STEPS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '10'
            },
            ROTATE_DIRECTION: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'ROTATE_DIRECTION',
            },
          },
        },
        {
          opcode: 'rotate_around_sprite',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Rotate around [SPRITE] by [STEPS] steps [ROTATE_DIRECTION]',
          arguments: {
            SPRITE: {
              type: Scratch.ArgumentType.STRING,
              menu: 'sprites',
            },
            STEPS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '10'
            },
            ROTATE_DIRECTION: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'ROTATE_DIRECTION',
            },
          },
        },
        "---",
        {
          opcode: 'rotate_in_shapes',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Rotate in [SHAPE] formation around x: [X] y: [Y] [ROTATE_DIRECTION]',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            ROTATE_DIRECTION: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'ROTATE_DIRECTION',
            },
            SHAPE: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'SHAPES',
            },
          },
        },
        {
          opcode: 'rotate_around_sprite_in_shapes',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Rotate around [SPRITE] in [SHAPE] formation [ROTATE_DIRECTION]',
          arguments: {
            SPRITE: {
              type: Scratch.ArgumentType.STRING,
              menu: 'sprites',
            },
            ROTATE_DIRECTION: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'ROTATE_DIRECTION',
            },
            SHAPE: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'SHAPES',
            },
          },
        },
        "---" + "🔄️ Direction",
        {
          opcode: 'point_towards_pos',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Point [DIRECTION] x: [X] y: [Y]',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            DIRECTION: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'towards_away',
            },
          },
        },
        "---",
        {
          opcode: 'direction_to',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Direction [DIRECTION] x: [X] y: [Y]',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            SPRITE: {
              type: Scratch.ArgumentType.STRING,
              menu: 'sprites',
            },
            DIRECTION: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'towards_away',
            },
          },
        },
        {
          opcode: 'direction_from_to',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Direction from x: [X1] y: [Y1] [DIRECTION] x: [X2] y: [Y2]',
          arguments: {
            X1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            Y1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            X2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '100'
            },
            Y2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '100'
            },
            DIRECTION: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'towards_away',
            },
          },
        },
        {
          opcode: 'direction_to_sprite',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Direction [DIRECTION] [SPRITE]',
          arguments: {
            SPRITE: {
              type: Scratch.ArgumentType.STRING,
              menu: 'sprites',
            },
            DIRECTION: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'towards_away',
            },
          },
        },
        "---",
        {
          opcode: 'turn_degrees_towards_or_away_dir',
          blockType: 'command',
          text: "Turn [DEGREE] degrees [DIRECTION] direction [DIR]",
          arguments: {
            DEGREE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 45,
            },
            DIR: {
              type: Scratch.ArgumentType.ANGLE,
              defaultValue: 10,
            },
            DIRECTION: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'towards_away',
            },
          },
          filter: ['sprite']
        },
        "---" + "📐 Position",
        {
          opcode: 'move_towards_or_away',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Move [STEPS] steps [DIRECTION] x: [X] y: [Y]',
          arguments: {
            STEPS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '10'
            },
            DIRECTION: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'towards_away',
            },
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
          },
        },
        {
          opcode: 'move_towards_or_away_from_sprite',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Move [STEPS] steps [DIRECTION] [SPRITE]',
          arguments: {
            STEPS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '10'
            },
            DIRECTION: {
              type: Scratch.ArgumentType.NUMBER,
              menu: 'towards_away',
            },
            SPRITE: {
              type: Scratch.ArgumentType.STRING,
              menu: 'sprites',
            },
          },
        },
        {
          opcode: 'set_home',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Set [HOME_ICON] home',
          arguments: {
            HOME_ICON: {
              type: Scratch.ArgumentType.IMAGE,
              dataURI: home_icon,
            },
          },
        },
        {
          opcode: 'go_to_home',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Go to [HOME_ICON] home',
          arguments: {
            HOME_ICON: {
              type: Scratch.ArgumentType.IMAGE,
              dataURI: home_icon,
            },
          },
        },
        "---" + "📏 Distance",
        {
          opcode: 'distance_to',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Distance to x: [X] y: [Y]',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
          },
        },
        {
          opcode: 'distance_from_to',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Distance from x: [X1] y: [Y1] to x: [X2] y: [Y2]',
          arguments: {
            X1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            Y1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            X2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '100'
            },
            Y2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '100'
            },
          },
        },
        "---" + "⛷️ Glide",
        {
          opcode: "betterGlide",
          blockType: Scratch.BlockType.COMMAND,
          text: "Glide [NAME] [SECS] secs x: [X] y: [Y]",
          filter: ['sprite'],
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100,
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0,
            },
            SECS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
            NAME: {
              type: Scratch.ArgumentType.STRING,
              menu: "sprites",
            },
          }
        },
        {
          opcode: "whileGlide",
          blockType: Scratch.BlockType.LOOP,
          text: "While gliding [NAME] [SECS] secs x: [X] y: [Y] run",
          filter: ['sprite'],
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100,
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0,
            },
            SECS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1,
            },
            NAME: {
              type: Scratch.ArgumentType.STRING,
              menu: "sprites",
            },
          }
        },
      ],
      menus: {
        sprites: {
          acceptReporters: true,
          items: '_getTargets'
        },
        sprites_withoutHome: {
          acceptReporters: true,
          items: this._getTargets(false)
        },
        ROTATE_DIRECTION: {
          acceptReporters: true,
          items: [
            {
              text: 'Clockwise',
              value: '-1'
            },
            {
              text: 'Counter-clockwise',
              value: '1'
            }
          ]
        },
        towards_away: {
          acceptReporters: true,
          items: [
            {
              text: 'towards',
              value: '1'
            },
            {
              text: 'away from',
              value: '-1'
            }
          ]
        },
        SHAPES: {
          acceptReporters: true,
          items: [
            {
              text: 'Triangle',
              value: '2.09'
            },
            {
              text: 'Square',
              value: '1.57'
            },
            {
              text: 'Pentagon',
              value: '1.26'
            },
            {
              text: 'Hexagon',
              value: '1.05'
            },
            {
              text: 'Heptagon',
              value: '0.897'
            },
            {
              text: 'Octagon',
              value: '0.785'
            },
          ]
        }
      }
    };
  }
  rotate_around({ X, Y, STEPS, ROTATE_DIRECTION }, util) {
    //Convert the angle to radians so sprite will rotate in circle
    let radians = STEPS * (Math.PI / 180)
    //Set the rotation direction to either CLOCKWISE: -1 or COUNTER-CLOCKWISE: 1
    radians = radians * ROTATE_DIRECTION

    // Use the rotatePoint(x1, y1, x2, y2, theta) function
    let newPos = rotatePoint(util.target.x, util.target.y, X, Y, radians);

    //Set the sprite's position to the new positions
    util.target.setXY(newPos[0], newPos[1]);
  }

  rotate_around_sprite({ SPRITE, STEPS, ROTATE_DIRECTION }, util) {
    // get target sprite's target
    SPRITE = SPRITE !== "_home_" ? this.runtime.getSpriteTargetByName(SPRITE) : this.getHomeState(util)

    // Get target sprite's X and Y
    let X = SPRITE.x
    let Y = SPRITE.y

    //Use the rotate_around block
    this.rotate_around({ X, Y, STEPS, ROTATE_DIRECTION }, util)
  }

  rotate_in_shapes({ X, Y, ROTATE_DIRECTION, SHAPE }, util) {
    // Set the rotation direction
    let radians = SHAPE * ROTATE_DIRECTION

    // Use the rotatePoint(x1, y1, x2, y2, theta) function
    // This one DOESN'T use rotate_around() block because rotate around have a radians for circles
    let newPos = rotatePoint(util.target.x, util.target.y, X, Y, radians);

    util.target.setXY(newPos[0], newPos[1]);
  }

  rotate_around_sprite_in_shapes({ SPRITE, ROTATE_DIRECTION, SHAPE }, util) {
    SPRITE = SPRITE !== "_home_" ? this.runtime.getSpriteTargetByName(SPRITE) : this.getHomeState(util)

    let X = SPRITE.x
    let Y = SPRITE.y

    // use the rotate_in_shapes() block
    this.rotate_in_shapes({ SPRITE, X, Y, ROTATE_DIRECTION, SHAPE }, util)
  }

  point_towards_pos({ X, Y, DIRECTION }, util) {
    //Set the sprite's direction using the find_direction_to() function
    util.target.setDirection(find_direction_to(X, Y, util.target.x * (0 - DIRECTION), util.target.y * (0 - DIRECTION)));
  }

  direction_to({ X, Y, DIRECTION }, util) {
    return find_direction_to(X, Y, util.target.x * (0 - DIRECTION), util.target.y * (0 - DIRECTION))
  }

  direction_from_to({ X1, Y1, X2, Y2, DIRECTION }) {
    return find_direction_to(X1, Y1, X2 * DIRECTION, Y2 * DIRECTION)
  }

  direction_to_sprite({ SPRITE, DIRECTION }, util) {
    SPRITE = SPRITE !== "_home_" ? this.runtime.getSpriteTargetByName(SPRITE) : this.getHomeState(util)
    let X = SPRITE.x
    let Y = SPRITE.y

    return find_direction_to(X, Y, util.target.x * (0 - DIRECTION), util.target.y * (0 - DIRECTION))
  }

  turn_degrees_towards_or_away_dir({ DEGREE, DIR, DIRECTION }, util) {
    let SPRITE = util.target
    const degree = Cast.toNumber(DEGREE);
    let dir = Cast.toNumber(DIR);
    if (DIRECTION == -1) {
      dir += 180;
      if (dir > 360) {
        dir -= 360;
      }
    }
    const dif = differenceBetweenDirections({ A: SPRITE.direction, B: dir });
    if (Math.abs(dif) < degree)
      SPRITE.setDirection(dir);
    else if (dif < 0)
      SPRITE.setDirection(SPRITE.direction - degree);
    else
      SPRITE.setDirection(SPRITE.direction + degree);
    console.log(Cast.toNumber(DEGREE))
  }

  move_towards_or_away({ STEPS, DIRECTION, X, Y }, util) {
    // Calculate the difference between the target and destination points
    let SPRITE = util.target
    let dx = X - SPRITE.x;
    let dy = Y - SPRITE.y;

    // If the sprite is at the target, add a small offset
    if (dx == 0 && dy == 0) {
      dx = Math.random() - 0.5;
      dy = Math.random() - 0.5;
    }

    // Calculate the distance between the two points
    let distance = Math.sqrt(dx * dx + dy * dy);

    // Normalize the difference if distance is not 0
    if (distance != 0) {
      dx /= distance;
      dy /= distance;
    }

    // Limit STEPS to distance
    if (STEPS > distance) {
      STEPS = distance;
    }

    // Move the target point towards or away from the destination point by the specified amount
    let x = util.target.x + DIRECTION * dx * STEPS;
    let y = util.target.y + DIRECTION * dy * STEPS;
    SPRITE.setXY(x, y)
  }

  move_towards_or_away_from_sprite({ STEPS, DIRECTION, SPRITE }, util) {
    if (SPRITE != util.target.getName()) {
      SPRITE = SPRITE !== "_home_" ? this.runtime.getSpriteTargetByName(SPRITE) : this.getHomeState(util)
      let X = SPRITE.x
      let Y = SPRITE.y

      // Calculate the difference between the target and destination points
      let dx = X - util.target.x;
      let dy = Y - util.target.y;

      // If the sprite is at the target, add a small offset in the direction the sprite is facing
      if (dx == 0 && dy == 0 && DIRECTION == -1) {
        let directionRad = SPRITE.direction * Math.PI / 180; // Convert direction to radians
        dx = Math.cos(directionRad);
        dy = Math.sin(directionRad);
      }

      // Calculate the distance between the two points
      let distance = Math.sqrt(dx * dx + dy * dy);

      // Normalize the difference if distance is not 0
      if (distance != 0) {
        dx /= distance;
        dy /= distance;
      }

      // Limit STEPS to distance
      if (STEPS > distance) {
        STEPS = distance;
      }

      // Move the target point towards or away from the destination point by the specified amount
      let x = util.target.x + DIRECTION * dx * STEPS;
      let y = util.target.y + DIRECTION * dy * STEPS;
      util.target.setXY(x, y)
    } else {
      console.error("Sprite cannot move towards/away from itself");
    }
  }

  distance_to({ X, Y }, util) {
    return find_distance_to(X, Y, util.target.x, util.target.y)
  }

  distance_from_to({ X1, Y1, X2, Y2 }) {
    return find_distance_to(X1, Y1, X2, Y2)
  }

  betterGlide(args, util, loop,) {
    const target = args.NAME !== "_home_" ? this.runtime.getSpriteTargetByName(args.NAME) : this.getHomeState(util);
    if (!util.stackFrame.startTime) {
      util.stackFrame.startTime = new Date().getTime();
      util.stackFrame.duration = Cast.toNumber(args.SECS);
      util.stackFrame.startX = target.x;
      util.stackFrame.startY = target.y;
      util.stackFrame.endX = Cast.toNumber(args.X);
      util.stackFrame.endY = Cast.toNumber(args.Y);
      if (util.stackFrame.duration <= 0) {
        target.setXY(util.stackFrame.endX, util.stackFrame.endY);
        return;
      }
      if (loop === "on") {
        util.startBranch(1, true);
      } else {
        util.yield();
      }
    } else {
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - util.stackFrame.startTime;
      if (timeElapsed < util.stackFrame.duration * 1000) {
        const frac = timeElapsed / (util.stackFrame.duration * 1000);
        const dx = frac * (util.stackFrame.endX - util.stackFrame.startX);
        const dy = frac * (util.stackFrame.endY - util.stackFrame.startY);
        target.setXY(
          util.stackFrame.startX + dx,
          util.stackFrame.startY + dy
        );
        if (loop === "on") {
          util.startBranch(1, true);
        } else {
          util.yield();
        }
      } else {
        target.setXY(util.stackFrame.endX, util.stackFrame.endY);
      }
    }
  }

  whileGlide(args, util) {
    this.betterGlide(args, util, "on")
  }

  set_home(_, util) {
    const target = util.target;
    if (target.isStage) return;
    // this is all of the sprite specific data we will save
    // variables are a bit too far, and most other data is stage only or shouldnt be overwritten
    const savedState = {
      x: target.x,
      y: target.y,
      size: target.size,
      direction: target.direction,
      rotationStyle: target.rotationStyle,
      visible: target.visible,
      effects: Clone.simple(target.effects), // object
      draggable: target.draggable,
      currentCostume: target.currentCostume,
      tintColor: target.tintColor,
      volume: target.volume
    };
    if (target.isOriginal) {
      const name = target.getName();
      this.spriteHomes[name] = savedState;
      this.spriteHomes = this.filterHomes("sprite", this.spriteHomes);
      return;
    }
    this.cloneHomes[target.id] = savedState;
    this.cloneHomes = this.filterHomes("clone", this.cloneHomes);
  }

  go_to_home(_, util) {
    const target = util.target;
    let homeState = this.getHomeState(util)
    // set state
    target.setXY(homeState.x, homeState.y);
    target.setSize(homeState.size);
    target.setDirection(homeState.direction);
    target.setRotationStyle(homeState.rotationStyle);
    target.setVisible(homeState.visible);
    if (homeState.effects) {
      for (const effectName in homeState.effects) {
        const value = homeState.effects[effectName];
        target.setEffect(effectName, value);
      }
    }
    target.setDraggable(homeState.draggable);
    target.setCostume(homeState.currentCostume);
    target.tintColor = homeState.tintColor; // tintColor isnt fully implemented yet so just do this
    target.volume = homeState.volume;
    this.runtime.requestRedraw();
  }

  _getTargets(withHome) {
    const spriteNames = [];
    if (withHome == true) { spriteNames.push({ text: "My home", value: "_home_" }); }
    const targets = this.runtime.targets;
    for (let index = 1; index < targets.length; index++) {
      const target = targets[index];
      if (target.isOriginal) {
        const targetName = target.getName();
        spriteNames.push({
          text: targetName,
          value: targetName,
        });
      }
    }
    return spriteNames.length > 0 ? spriteNames : [""];
  }
}

window.tempExt = {
  Extension: ReMotion,
  info: {
    name: 'remotion.Name',
    description: 'remotion.Description',
    extensionId: 'remotion',
    iconURL: 'https://fath11.github.io/custom-extension/Fath/banners/Motion.png',
    insetIconURL: Icon,
    collaborator: 'Fath11@Cocrea',
    collaboratorList: [
      {
        collaborator: "Fath11@Cocrea",
        collaboratorURL: "https://cocrea.world/@Fath11",
      },
      {
        collaborator: "SharkPool-SP@TW",
        collaboratorURL: "https://github.com/SharkPool-SP",
      },
      {
        collaborator: "Arkos(搬运者) @ CCW",
        collaboratorURL: "https://www.ccw.site/student/6107c5323e593a0c25f850f8",
      },
      {
        collaborator: "NamelessCat@TW",
        collaboratorURL: "https://github.com/NexusKitten",
      },
    ],
  },
  l10n: {
    'zh-cn': {
      'remotion.Name': 'ReMotion',
      'remotion.Description': '用于控制和操作浏览器内置的JavaScript控制台'
    },
    en: {
      'remotion.Name': 'ReMotion',
      'remotion.Description': "More blocks for controlling sprite's motion!"
    }
  },
}
