import sys,glob,os
from PIL import Image, ImageDraw
d=sys.argv[1]; fs=sorted(glob.glob(d+'/*.jpg')); W=int(sys.argv[2]) if len(sys.argv)>2 else 960
for k in range(0,len(fs),4):
    grp=fs[k:k+4]; ims=[Image.open(f) for f in grp]
    w=W; h=round(ims[0].height*W/ims[0].width)
    s=Image.new('RGB',(w*2,h*2),(255,0,255)); dr=ImageDraw.Draw(s)
    for i,(im,f) in enumerate(zip(ims,grp)):
        s.paste(im.resize((w,h)),((i%2)*w,(i//2)*h)); dr.text(((i%2)*w+6,(i//2)*h+h-16),os.path.basename(f),fill=(255,0,255))
    s.save(f'{d}_sheet{k//4:02d}.jpg',quality=80)
print(len(fs))
