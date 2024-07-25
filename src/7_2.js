import { findPropertyWithValue, log } from './util/helpers.js';

let input = `49A49 734
67594 467
Q2429 453
3J787 359
K4824 703
29992 804
94JQK 988
2TQT5 765
7TQ3T 710
J4389 979
96J56 271
JTTJT 488
7QA5J 306
Q72Q2 163
A666A 759
2779T 566
A777Q 136
TJ277 365
QQ339 388
KA22K 31
99974 590
72672 946
4T25A 423
38873 650
97Q99 26
36436 66
98979 230
TTTK8 44
QQAQ4 451
77774 668
T77QT 108
JAJJA 681
74T52 637
9A7TA 843
4A334 3
669KK 727
999A6 156
77T77 464
845J3 59
AAAQQ 933
38K88 806
2QQ2J 107
TJATT 936
44737 794
66J66 33
T4TJQ 106
74TTQ 97
K84J4 374
55AAA 805
KK3K3 513
33393 178
4J44J 328
682A5 728
AJTKT 249
6959K 363
9993Q 991
K2K3T 70
JJQ42 857
AJ888 419
47T62 393
66JTT 498
44474 539
37QTA 747
QQ4JT 473
J6JQQ 678
5TT55 538
J22A2 15
QTAA9 478
7K43J 410
TKT2A 368
8KKK8 332
KK686 771
47762 550
J3773 653
557J5 167
8388T 926
J77K4 309
3A9Q5 215
A6AA2 845
K55KK 499
K8239 238
TA6AA 987
AA2AA 413
9628A 81
A22AK 50
75565 141
TT56T 518
2A52J 816
444J3 690
T3565 582
A33J3 258
42877 96
99J99 444
4A234 572
JT5K8 929
74QT5 852
J25J4 76
5Q588 853
74T24 1
A7853 16
4T53T 646
9KT7Q 511
376A7 781
66496 944
6J737 839
767J6 386
62A65 963
8A8A3 246
255TT 429
58J8A 341
37828 279
T3598 30
68JK8 109
89247 883
QJ557 510
TA899 656
6K6KJ 714
3667J 102
JAAAT 821
38JAK 748
778A7 411
K93JK 463
A85T2 80
8T39A 495
3JT3T 203
K9K5K 721
9J9J9 679
4Q5Q4 101
37333 745
999QQ 943
84484 25
28268 469
33TAA 99
KAJKJ 924
T4JJ3 185
6777K 725
33J9K 846
J7577 899
48K45 575
TK852 104
97737 161
65552 738
33TTT 915
2AJ47 644
288Q2 870
85599 159
997AQ 552
J6879 117
6TJ96 820
45K62 674
9ATAT 537
9K7Q2 211
KKKAK 620
7TT6T 837
TT444 865
5K8KK 195
KK6K6 170
J2888 744
8A228 40
TT9K9 334
5998Q 992
KJ964 760
KKK98 460
8J444 917
TK9A8 485
T8KK5 216
6TA6Q 871
TA39K 461
J9QK5 292
2222T 751
697KT 524
5565J 484
T6T3T 241
696A6 542
5QQ53 531
75555 639
299J2 219
A5552 882
33AAJ 224
49494 455
KJ635 532
92QJ8 397
J3333 990
58955 739
89888 822
93233 521
J6444 599
95TT5 351
T3333 62
385K9 217
35AKJ 682
53222 889
TT35T 591
87QJ7 196
45226 261
65K7A 717
99J6K 137
77757 73
88J97 800
J6335 142
3A3K3 231
75Q5Q 311
3J265 574
26AKK 474
QJ699 307
AKKAA 737
KA5TK 600
J3Q33 830
7Q7Q7 953
82888 888
KKK22 554
55Q99 354
52522 868
9586T 844
A7T95 465
J5TQ9 660
K6352 487
32A95 925
275Q9 84
555AA 964
7Q247 11
Q3A44 53
JJ548 272
J8673 103
22229 317
3K566 505
99AA9 826
2468T 910
44QQQ 605
QJQ77 932
25229 614
666QQ 994
99777 568
6622J 945
AK48T 243
QQ676 922
TKKA8 715
78788 225
AA7AT 240
7TK6Q 886
QQ877 308
55559 220
7K5QT 978
7543T 206
2K522 149
229AA 975
J5955 667
A8298 95
4T493 189
632A3 199
3K43J 181
6T52Q 657
J58JJ 19
29KTA 173
K33J6 662
Q266J 633
74K44 128
TT996 563
QJ886 280
4Q82Q 287
85535 601
JT88A 810
95355 797
22J22 121
4TTT4 665
Q8888 496
89A8A 47
52885 10
AT6J3 454
9Q66Q 17
A8AA2 651
47774 299
QT788 939
TQQQQ 724
QAT94 132
5KK6K 68
T4322 628
K6666 174
88J88 194
43AAA 914
T882J 338
6QT66 171
48Q88 1000
TKTTJ 502
AA372 763
JKKJJ 60
23232 694
A355J 430
36J68 148
57QQQ 277
9JT9T 577
TQJQT 434
93334 792
65J75 761
98894 24
33833 775
J5Q2K 322
56T58 476
529K6 236
K5KJ5 296
35JQ9 951
JT6T2 545
63328 960
484A6 716
J3T99 622
47J8K 162
574A9 442
5JA96 702
868A9 947
56JQK 424
TT5AA 36
K2K22 125
AQA4A 470
252J2 814
TTTT2 490
22J62 428
7733T 160
QT3KA 200
9A972 208
JA46J 798
A4QJ6 45
9J488 557
JAAAJ 188
3Q5JJ 350
24K24 22
Q88K8 369
A2AA2 131
TK659 824
48726 782
3939J 573
4Q372 525
A23J7 705
83A5K 807
5J522 462
J935A 431
99933 252
97Q6T 803
33J3K 293
65662 909
66538 896
4J4JK 404
76TAK 617
99979 394
Q3JT5 823
A3K38 606
2K2J3 179
97AA9 530
6J6QQ 8
5J2T2 949
A44A5 145
39A2T 523
6665Q 700
23288 693
65336 183
T64T8 897
K76K6 48
2JTT2 146
K94J8 769
AA8AA 556
5Q775 586
5TQ8Q 143
AJA8A 529
A3629 153
4Q69T 52
53T9T 414
QJ424 114
J595K 276
63622 116
99599 295
94J9J 916
42822 304
5T45Q 318
T999T 878
777J7 669
79T77 581
TTAAA 921
A3333 736
KJ54K 88
K363K 618
7T837 303
8833T 43
2976A 227
TTTT5 441
J66T4 928
TT5A8 138
8TQJ3 641
29JT5 204
K3T65 113
J9855 284
3KA22 835
6J644 836
3K695 801
58855 74
Q6579 126
64QK7 191
ATATQ 895
9KK97 560
32Q23 298
J98J3 336
333TT 593
33QQQ 438
244Q2 446
QJAAA 902
88887 777
Q8838 752
86668 984
924QK 288
KJKJK 186
T22JJ 500
J65KA 764
4K559 993
44646 327
Q444Q 598
JAA3J 741
J4J49 976
5J6T5 778
TTATT 908
AA9T9 481
38696 320
T444A 594
K33KT 376
66955 127
KAKJT 709
JT8A6 184
JJ8JJ 330
7AAKA 684
33233 373
8T8K8 576
8TQ27 4
552K5 182
5692J 21
TTQJT 912
6QA66 840
TT3TT 546
6K4Q8 849
T779T 631
K93K9 232
6A4TA 254
2K5A3 154
2QQ22 491
AAKK2 680
63326 302
TT7KQ 378
7J477 105
QJQ4J 862
J4596 867
22335 743
74329 221
Q8333 758
699J6 285
8QAJJ 497
8QT67 711
KAAAA 92
K96T8 548
8TT9T 508
T977J 516
27272 313
AKKK8 389
879A6 18
55K33 383
38484 339
A9299 437
833A3 290
77JJ4 433
7JAJ2 856
QK45J 540
Q96T2 699
88884 212
K6778 205
QA4TA 192
QA86Q 872
22T7T 972
23272 415
42J42 558
Q72Q7 242
8A45T 948
4JJ4J 177
J4Q9A 323
KA3KQ 937
AA847 655
AQJQQ 61
36T6K 294
63673 766
7QTT8 300
8KQ86 346
QQJK7 321
A32AA 549
44KK4 357
55454 547
33666 260
AAQQQ 436
J55K5 264
3KJQ3 685
99K99 269
9J9QJ 677
J8844 854
2567Q 176
AAAJ5 689
T4T9T 831
36874 356
TTTJT 122
33993 609
4JK3T 920
79772 65
55225 942
K228K 898
3K2QA 274
QTAQQ 718
6JJJ9 506
83869 645
A8T24 475
A3647 625
99353 158
5566T 652
5J454 726
A6AT6 71
42JJ9 286
88JQ8 344
AAQJK 477
J6266 876
4T499 750
76853 986
4QKKT 603
84K3K 629
AA636 250
3T263 756
T8227 885
9J533 28
26446 613
AAAJA 841
7AA2A 305
QQJQQ 503
QT33T 509
3TT22 379
88844 78
629KJ 416
74J44 813
QA79K 526
2T6T5 522
K2TQA 774
85AQJ 283
TJ6AQ 735
335J2 450
K4944 222
K54K7 348
KKKTK 673
7K797 407
JKKAK 561
TJT77 663
JJ777 265
6QJQ3 873
2QTK5 456
2Q4A9 198
5J7Q6 270
86A67 675
J4444 534
55K3T 152
277KJ 55
8QQ2J 838
A75QA 234
848JJ 553
JJ28J 314
7698Q 583
ATTTA 851
Q88QQ 353
89A34 955
Q82K5 691
T4A8J 858
852J7 253
39JQ8 319
2Q7QQ 828
QQ4KQ 848
35KQT 233
4AAAA 952
K289K 695
49T88 541
6QJ44 544
K4KAK 408
75882 435
9K99K 515
3TK3J 608
94222 564
A9K44 666
3722T 391
8J88J 742
Q2KQK 950
J999Q 493
85K88 331
J4AAA 935
AJTAT 144
796J9 776
42444 788
52K9K 980
9QQ97 597
KQQQQ 793
K8267 884
8Q594 90
8J829 860
3KT64 245
6JTQ6 85
AJ28T 349
995TT 733
33444 659
5J333 927
32JA6 335
38Q65 619
96966 626
55JJ5 815
3664T 940
AAAK6 362
62573 772
TAAA9 588
A9K63 34
4753Q 209
59595 913
57755 42
2J922 315
A6834 273
QAQ8Q 239
3K6QQ 94
A55J5 729
66776 89
AT525 479
66663 616
A4A5A 207
88TQT 551
87Q5T 749
77KKK 291
T3T44 855
5927A 621
A28T6 187
QT7Q9 135
77J79 786
8JT88 571
82J28 13
333J6 519
67229 790
T577T 390
62226 762
T8888 713
7JQJQ 877
532AA 384
5A5AJ 533
66JA6 381
36KK9 457
43343 755
67767 35
96AJ3 398
JJA95 380
2QQ8Q 569
69AK9 567
9KK9T 654
84244 958
KTJKK 32
K87Q5 180
T9A26 262
Q555Q 787
48J6Q 67
K4KKK 638
TAAAA 686
33335 962
88886 696
2334Q 439
7T78K 364
73377 54
8Q744 998
52Q49 707
J3J5J 370
K2KJ2 482
T6JK5 969
53J5J 371
QQQA2 983
8Q886 93
63888 818
TQQQK 746
7285A 578
66656 123
Q9AQQ 809
47AA7 730
479Q2 731
55335 869
3K3QK 166
6K257 228
2JQ64 139
26J4K 624
55Q55 866
KQ937 697
TJ783 39
72T5K 247
444K4 432
J2783 723
T68T6 817
TT5T9 420
T9432 426
6AAK5 903
33732 630
QA4A4 683
6JJ6A 115
KJK3T 698
88783 520
2A8AT 847
3A83A 449
4Q4J9 324
TQTQQ 938
693QA 218
398A8 310
94Q68 129
9J899 535
75A55 562
5KKKK 56
TA376 480
JJ5J5 565
6J7KJ 770
86667 892
6686J 14
89889 780
65555 585
QQQJJ 688
88JJ2 492
33238 812
7862T 753
J22J2 587
73747 973
K3JQA 2
K3K9K 150
6A8JA 9
T5K8A 670
5K33T 555
K2266 528
JAK59 784
8AQ74 213
6QA9T 570
27873 69
27TQT 507
8K3QA 75
6T252 226
T4432 46
JQQ6Q 779
KKAQK 443
96869 83
3JQ3A 326
Q222K 875
A3954 244
333JJ 406
22AQQ 959
55585 754
JT938 981
555J5 418
TJJT9 773
J826A 863
3828J 316
5A8JJ 7
47K83 536
K5J9K 325
T4Q59 382
KKK7K 402
75758 297
74484 829
7T47T 278
K744Q 237
T8T5J 147
55228 880
J57J2 172
57549 592
76276 422
936JQ 483
QQ5QJ 255
A7T78 783
5TT58 971
JJJJJ 86
55QQQ 692
T728T 701
KTTKT 372
TT7TT 282
Q5982 604
KK8KK 514
8KKTK 448
6K8J7 118
499J9 87
22828 140
58JJ8 789
66637 58
44445 919
JKJ63 890
A463A 918
393J8 827
44434 37
999T7 999
966J7 802
43962 51
K5J45 719
87KK5 757
2K337 977
582J9 627
69639 355
97KJ6 610
J2223 704
6A4T5 165
7AJA7 767
646K4 706
QQ2QJ 72
T3JK8 301
6T3AK 661
7K8T5 970
JJ33J 396
49446 412
AA77A 649
66A86 64
QQAQQ 120
8AA8A 968
57QJ2 579
KK99K 930
94499 864
7K7Q7 275
88A88 210
37837 458
A447A 931
AAA66 643
66667 887
733A8 819
3792Q 602
J4532 41
6869Q 611
KJQKQ 894
AJQ87 38
39A74 941
282JJ 345
88Q73 251
77595 256
22777 124
94299 358
TTTT4 489
QQJ44 825
58K24 466
92AA9 111
6368T 27
8JT75 405
876K3 607
2A8Q7 361
9QAK5 923
J666J 312
A9Q74 155
32242 202
999A5 559
77772 427
2QJJQ 333
Q222T 157
3QQQJ 366
J6225 401
33334 440
443K6 268
25Q73 352
56565 879
84TAQ 387
79777 861
666AT 811
7A97A 235
2K6KJ 859
9J993 281
Q8TK9 808
56429 98
3JJT6 77
22383 905
5A683 907
8KJKK 267
33T38 168
5865K 615
6QQQ3 399
5AQ82 340
QK7QK 720
74474 347
J5693 589
JAAQ9 623
22267 417
8T88Q 29
J2422 527
6A5AA 110
23J33 612
2Q997 289
5T564 967
KQ52Q 214
9J53T 175
6TT76 982
44QKQ 201
32633 911
KAAJK 634
75J57 49
66668 901
6QJK6 494
J9K66 12
JKK6K 5
J3869 82
QQ7QQ 740
KKK46 934
56646 367
Q5433 486
88636 954
J8277 100
K5566 343
666A6 190
KKJKK 375
3J322 259
3K9J4 360
888A6 584
66865 708
T2JQ2 722
JJ393 632
77TT7 834
22Q82 57
97AJA 785
QQ9QQ 501
6AA6K 580
53353 956
J8JKQ 6
QAA7T 671
A3T5K 891
4QKJJ 795
5T333 91
887A8 997
5K57J 796
AQ763 595
QT777 995
29J45 996
76262 130
696K9 961
6A65K 197
34838 512
4299K 193
K3J37 985
9922A 881
5TT8T 134
44Q45 504
438K8 133
JA788 459
KKAAK 900
44222 445
8TJTK 468
6664K 337
28JK3 850
TJ44J 832
57932 957
T2AJ4 409
TA596 635
87839 23
A2722 248
K7777 543
638T9 966
55A32 471
69JJ3 893
253KK 676
Q8Q3T 63
J4K7K 712
9999A 20
868KK 257
27354 266
75K75 687
AAAAQ 400
5252Q 169
2TT62 517
34J4J 974
TAQ99 112
58J6T 452
82T58 392
65J62 732
5T445 263
AKATA 640
QJT55 329
T4449 342
A567A 647
A2T36 833
J742T 799
KA64T 395
Q4257 989
99993 223
TJTT9 425
8KAKQ 648
2J4K5 842
43J34 151
9Q949 636
KK4K4 229
7757T 385
4J774 421
9QKAQ 79
469TA 965
K63J9 164
3AT43 874
4JKQ6 664
373Q3 791
KK66Q 377
77JQ7 596
8JAA8 658
TJT3T 447
A5555 119
8486J 768
58289 904
9T999 642
44JK4 472
A752Q 672
36TA8 906
84824 403`;

const cards = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J'];
const handStrength = {
  highCard: 1,
  onePair: 2,
  twoPair: 3,
  threeOfAKind: 4,
  fullHouse: 5,
  fourOfAKind: 6,
  fiveOfAKind: 7,
};

function parseInput(input) {
  return input.split('\n').map((line) => {
    const [hand, bidStr] = line.split(' ');
    return {
      hand,
      bid: parseInt(bidStr, 10),
      handType: getHandType(hand),
    };
  });
}

function getHandType(hand) {
  const wildCardNumber = countWildCards(hand, 'J');
  const fullHand = countCards(hand);
  let handType = determineHandType(fullHand);

  if (wildCardNumber > 0) {
    const handWithoutWildcard = countCards(hand.replace(/J/g, ''));
    handType = adjustHandTypeForWildcards(handType, wildCardNumber, handWithoutWildcard);
  }

  return handType;
}

function countWildCards(hand, wildCard) {
  return hand.split('').filter((card) => card === wildCard).length;
}

function countCards(hand) {
  return hand.split('').reduce((acc, card) => {
    acc[card] = (acc[card] || 0) + 1;
    return acc;
  }, {});
}

function determineHandType(cardCount) {
  const counts = Object.values(cardCount).sort((a, b) => b - a);

  switch (counts.join(',')) {
    case '5':
      return 'fiveOfAKind';
    case '4,1':
      return 'fourOfAKind';
    case '3,2':
      return 'fullHouse';
    case '3,1,1':
      return 'threeOfAKind';
    case '2,2,1':
      return 'twoPair';
    case '2,1,1,1':
      return 'onePair';
    default:
      return 'highCard';
  }
}

function adjustHandTypeForWildcards(handType, wildCardNumber, handWithoutWildcard) {
  const handWithoutWildcardLength = Object.keys(handWithoutWildcard).length;
  const handStrength = {
    highCard: 1,
    onePair: 2,
    twoPair: 3,
    threeOfAKind: 4,
    fullHouse: 5,
    fourOfAKind: 6,
    fiveOfAKind: 7,
  };

  switch (wildCardNumber) {
    case 1:
      if (handWithoutWildcardLength === 4)
        return findPropertyWithValue(handStrength, handStrength[handType] + 1);
      if (handWithoutWildcardLength === 3)
        return findPropertyWithValue(handStrength, handStrength[handType] + 2);
      if (handWithoutWildcardLength === 2)
        return findPropertyWithValue(handStrength, handStrength[handType] + 2);
      if (handWithoutWildcardLength === 1)
        return findPropertyWithValue(handStrength, handStrength[handType] + 1);
      break;
    case 2:
      if (handWithoutWildcardLength === 3)
        return findPropertyWithValue(handStrength, handStrength[handType] + 2);
      if (handWithoutWildcardLength === 2)
        return findPropertyWithValue(handStrength, handStrength[handType] + 3);
      if (handWithoutWildcardLength === 1)
        return findPropertyWithValue(handStrength, handStrength[handType] + 2);
      break;
    case 3:
      if (handWithoutWildcardLength === 2)
        return findPropertyWithValue(handStrength, handStrength[handType] + 2);
      if (handWithoutWildcardLength === 1)
        return findPropertyWithValue(handStrength, handStrength[handType] + 2);
      break;
    case 4:
      if (handWithoutWildcardLength === 1)
        return findPropertyWithValue(handStrength, handStrength[handType] + 1);
      if (handWithoutWildcardLength === 0)
        return findPropertyWithValue(handStrength, handStrength[handType]);
      break;
    case 5:
      return findPropertyWithValue(handStrength, handStrength[handType]);
  }

  return handType;
}

const sortHandsByStrength = (hands) => {
  return hands.sort((a, b) => {
    const typeComparison = handStrength[a.handType] - handStrength[b.handType];
    if (typeComparison !== 0) return typeComparison;
    return compareFn(a.hand, b.hand);
  });
};

function compareFn(a, b) {
  for (let i = 0; i < 5; i++) {
    const cardOneStrength = cards.indexOf(a[i]);
    const cardTwoStrength = cards.indexOf(b[i]);

    if (cardOneStrength > cardTwoStrength) {
      return -1;
    } else if (cardOneStrength < cardTwoStrength) {
      return 1;
    }
  }

  return 0;
}

function rankHands(sortedHands) {
  let handRank = 1;
  return sortedHands.map((hand) => ({ ...hand, rank: handRank++ }));
}

function calculateFinalScore(rankedHands) {
  return rankedHands.reduce((acc, hand) => acc + hand.rank * hand.bid, 0);
}

const parsedInput = parseInput(input);
const sortedHands = sortHandsByStrength(parsedInput);
const rankedHands = rankHands(sortedHands);
const finalResult = calculateFinalScore(rankedHands);

log(finalResult);
