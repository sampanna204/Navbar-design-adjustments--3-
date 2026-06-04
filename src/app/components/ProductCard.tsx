import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './ImageWithFallback';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  badge?: string;
}

export function ProductCard({
  image,
  name,
  description,
  price,
  originalPrice,
  badge,
}: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-[#FFFEFB]">
      <div className="relative overflow-hidden bg-[#F5E6D3]">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {badge && (
          <div className="absolute top-4 right-4 bg-[#D4A574] text-[#4A4238] px-3 py-1 rounded-full text-sm">
            {badge}
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Button size="sm" className="bg-[#FFFEFB] text-[#4A4238] hover:bg-[#F5E6D3]">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button size="icon" variant="outline" className="bg-[#FFFEFB] hover:bg-[#F5E6D3] border-[#E8D4B8]">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg mb-1 text-[#4A4238] font-semibold">{name}</h3>
        <p className="text-sm text-[#8B7E6F] mb-3">{description}</p>
        <div className="flex items-center gap-2">
          <span className="text-xl text-[#4A4238] font-bold">NPR {price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-[#8B7E6F] line-through">
              NPR {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
